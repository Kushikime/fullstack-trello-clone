"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { z } from "zod";

export type State = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
};

const CreateBoard = z.object({
  title: z.string().min(3, {
    message: "Minimum length of board name is 3",
  }),
});

export const create = async (prevState: State, formData: FormData) => {
  const validatedFields = CreateBoard.safeParse({
    title: formData.get("title"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields",
    };
  }

  const { title } = validatedFields.data;

  try {
    await db.board.create({
      data: {
        title,
      },
    });
  } catch (err) {
    return {
      message: "DB Error",
    };
  }

  revalidatePath("/organization/org_2aXXmSUHZI7iXbppf8b94rFPHPp");
  redirect("/organization/org_2aXXmSUHZI7iXbppf8b94rFPHPp");
};

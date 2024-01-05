import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteBoard = async (id: string) => {
  "use server";

  await db.board.delete({
    where: {
      id,
    },
  });

  revalidatePath("/organization/org_2aXXmSUHZI7iXbppf8b94rFPHPp");
};

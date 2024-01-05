"use client";

import FormInput from "./forminput";
import FormButton from "./formbutton";
import { createBoard } from "@/actions/create-board";
import { useAction } from "@/hooks/use-action";

interface BoardProps {}

const Form = (props: BoardProps) => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log("SUCCESS: ", data);
    },
    onError: (data) => {
      console.error("ERROR: ", data);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title });
  };
  return (
    <form action={onSubmit} className="flex">
      <FormInput errors={fieldErrors} />
      <FormButton />
    </form>
  );
};

export default Form;

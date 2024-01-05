"use client";

import { State, create } from "@/actions/createBoard";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";
import FormInput from "./forminput";
import FormButton from "./formbutton";

interface BoardProps {}

const Form = (props: BoardProps) => {
  const initialState: State = { message: null, errors: {} };
  const [state, dispatch] = useFormState(create, initialState);

  return (
    <form action={dispatch} className="flex">
      <FormInput />
      <FormButton />
    </form>
  );
};

export default Form;

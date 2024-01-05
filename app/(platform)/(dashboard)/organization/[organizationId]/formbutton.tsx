"use client";
import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useFormStatus } from "react-dom";

interface FormInputProps {
  errors?: {
    title?: string[];
  };
}

export const FormButton: FC<FormInputProps> = ({ errors }) => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit" size="sm" className="ml-2">
      Submit
    </Button>
  );
};

export default FormButton;

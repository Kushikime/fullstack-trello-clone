"use client";
import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useFormStatus } from "react-dom";

interface FormInputProps {
  errors?: {
    title?: string[];
  };
}

export const BoardDeleteButton: FC<FormInputProps> = ({ errors }) => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit" variant="destructive">
      Delete
    </Button>
  );
};

export default BoardDeleteButton;

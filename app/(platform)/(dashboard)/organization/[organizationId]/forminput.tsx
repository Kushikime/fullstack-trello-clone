"use client";
import { Input } from "@/components/ui/input";
import { FC } from "react";
import { useFormStatus } from "react-dom";

interface FormInputProps {
  errors?: {
    title?: string[];
  };
}

export const FormInput: FC<FormInputProps> = ({ errors }) => {
  const { pending } = useFormStatus();
  return (
    <div className="flex flex-col space-y-2 items-center">
      <Input
        id="title"
        name="title"
        required
        placeholder="Enter a board title"
        disabled={pending}
      />
      {errors?.title ? (
        <div>
          {errors?.title.map((error) => (
            <p key={error} className="text-rose-500">
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default FormInput;

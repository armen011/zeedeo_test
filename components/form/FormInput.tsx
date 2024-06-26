import { UseFormRegisterReturn, FieldError } from "react-hook-form";
import { FC, ForwardedRef, forwardRef, useState } from "react";
import FormLabel from "./FormLabel";
import FormError from "./FormError";
import ShowIcon from "@/assets/icons/show_password.svg";
import HideIcon from "@/assets/icons/hide_password.svg";
import { twMerge } from "tailwind-merge";

type ShowPasswordProps = {
  type: "password" | "text" | "number";
  handleChange: () => void;
};

const ShowPassword: FC<ShowPasswordProps> = ({ type, handleChange }) => {
  return (
    <div
      className="absolute right-3 sm:right-6 top-2 sm:top-3 my-auto cursor-pointer"
      onClick={handleChange}
    >
      {type === "password" ? (
        <ShowIcon className="h-5 w-5" />
      ) : (
        <HideIcon className="h-5 w-5" />
      )}
    </div>
  );
};

type FormInputProps<T extends string> = {
  label?: string;
  id: T;
  placeholder?: string;
  error?: FieldError;
  type?: "password" | "text" | "number";
  className?: string;
} & UseFormRegisterReturn<T>;

const FormInput = <T extends string>(
  {
    label,
    id,
    placeholder,
    error,
    type = "text",
    className,
    ...otherProp
  }: FormInputProps<T>,
  ref: ForwardedRef<HTMLInputElement> | null
) => {
  const [inputType, setInputType] = useState(type);
  const handleTypeSelect = () => {
    setInputType((prev) => (prev === "password" ? "text" : "password"));
  };
  return (
    <div className={twMerge("flex flex-col", className)}>
      <FormLabel id={id} label={label} />
      <div className="border rounded-[100px] border-[#3B0F84] relative overflow-hidden">
        <input
          id={id}
          type={inputType}
          {...otherProp}
          ref={ref}
          placeholder={placeholder}
          className="outline-none bg-transparent px-3 sm:px-6 py-2 sm:py-3 w-full text-[#191919] text-14"
        />
        {type === "password" && (
          <ShowPassword type={inputType} handleChange={handleTypeSelect} />
        )}
      </div>
      <FormError message={error?.message} />
    </div>
  );
};

export default forwardRef<HTMLInputElement, FormInputProps<string>>(FormInput);

import { FC } from "react";
import WarningIcon from "@/assets/icons/warning.svg";

type FormErrorProps = {
  message?: string;
};

const FormError: FC<FormErrorProps> = ({ message }) => {
  if (!message) {
    return null;
  }
  return (
    <div className="flex items-center gap-2 mt-1 sm:mt-2">
      <WarningIcon className="w-4 h-4" />
      <p className="text-13 sm:text-14 text-[#FF015C]">{message} </p>
    </div>
  );
};

export default FormError;

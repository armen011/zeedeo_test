import { FC } from "react";

type FormLabelProps = {
  label?: string;
  id: string;
};

const FormLabel: FC<FormLabelProps> = ({ label, id }) => {
  if (!label) {
    return null;
  }
  return (
    <label
      htmlFor={id}
      className="text-13 sm:text-sm mb-1 sm:mb-2 text-[#191919]"
    >
      {label}
    </label>
  );
};

export default FormLabel;

import { FC } from "react";
import { twMerge } from "tailwind-merge";

type SelectButtonProps = {
  title: string;
  active?: boolean;
};

const SelectButton: FC<SelectButtonProps> = ({ title, active }) => {
  return (
    <button
      type="button"
      className={twMerge(
        "px-4 py-2 text-18 text-[#3B0F84] rounded-xl border border-[#D91883] font-semibold",
        active && "text-white bg-gradient-to-b from-[#C11574] to-[#FF015C]"
      )}
    >
      {title}
    </button>
  );
};

export default SelectButton;

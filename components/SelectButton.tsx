import { FC } from "react";
import { twMerge } from "tailwind-merge";

type SelectButtonProps = {
  title: string;
  active?: boolean;
  onClick: () => void;
};

const SelectButton: FC<SelectButtonProps> = ({ title, active, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={twMerge(
        "px-4 py-2 text-18 text-[#3B0F84] rounded-xl border border-[#D91883] font-semibold animate-smooth-appear",
        active &&
          "text-white bg-gradient-to-b from-[#C11574] to-[#FF015C] transition-colors"
      )}
    >
      {title}
    </button>
  );
};

export default SelectButton;

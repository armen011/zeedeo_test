import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CategoryButtonProps {
  title: string;
  children: ReactNode;
  active?: boolean;
}

const CategoryButton: FC<CategoryButtonProps> = ({
  title,
  children,
  active = false,
}) => {
  return (
    <button
      type="button"
      className={twMerge(
        "w-60 h-20 px-6 rounded-[55px] flex items-center border gap-1 transition-all",
        active ? "border-[#FF015C]" : ""
      )}
    >
      {children}
      <span
        className={twMerge(
          "text-black text-lg transition-all",
          active ? "text-[#3B0F84] font-bold" : "font-semibold"
        )}
      >
        {title}
      </span>
    </button>
  );
};

export default CategoryButton;

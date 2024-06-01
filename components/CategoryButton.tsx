import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CategoryButtonProps {
  title: string;
  children: ReactNode;
  active?: boolean;
  onClick: () => void;
}

const CategoryButton: FC<CategoryButtonProps> = ({
  title,
  children,
  active = false,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={twMerge(
        "h-20 px-6 rounded-[55px] flex items-center border gap-1 max-w-[300px] min-w-[225px]",
        active && "border-[#FF015C]"
      )}
    >
      {children}
      <span
        className={twMerge(
          "text-black text-18",
          active ? "text-[#3B0F84] font-bold text-18" : "font-semibold text-18"
        )}
      >
        {title}
      </span>
    </button>
  );
};

export default CategoryButton;

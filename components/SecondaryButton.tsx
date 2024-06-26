import { FC } from "react";
import { twMerge } from "tailwind-merge";

type SecondaryButtonProps = {
  disabled?: boolean;
  loading?: boolean;
  text: string;
  type?: "submit" | "reset" | "button";
  className?: string;
  onClick?: () => void;
};

const SecondaryButton: FC<SecondaryButtonProps> = ({
  disabled,
  loading,
  text,
  type = "submit",
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={twMerge(
        "w-full  he-[40px] sm:h-[52px] text-16 rounded-[100px] py-2 sm:py-4 font-semibold text-white transition-colors duration-300",
        disabled
          ? "bg-gray-500 cursor-not-allowed text-opacity-70"
          : "bg-[#38B469] hover:bg-opacity-80",
        loading && "bg-opacity-80",
        className
      )}
      type={type}
    >
      {loading ? "Loading..." : text}
    </button>
  );
};

export default SecondaryButton;

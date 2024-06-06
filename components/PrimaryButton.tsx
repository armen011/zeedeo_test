import { FC } from "react";
import { twMerge } from "tailwind-merge";

type PrimaryButtonProps = {
  disabled?: boolean;
  loading?: boolean;
  text: string;
  type?: "submit" | "reset" | "button";
  className?: string;
  onClick?: () => void;
};

const PrimaryButton: FC<PrimaryButtonProps> = ({
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
        "w-full he-[40px] sm:h-[52px] text-14 sm:text-16 rounded-[100px] py-2 sm:py-4 font-semibold text-white transition-colors duration-300",
        disabled
          ? "bg-gray-500 cursor-not-allowed text-opacity-70"
          : "bg-[#D91883] hover:bg-opacity-80",
        loading && "bg-opacity-80",
        className
      )}
      type={type}
    >
      {loading ? <div className="button-loader mx-auto" /> : text}
    </button>
  );
};

export default PrimaryButton;

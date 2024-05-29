import { FC } from "react";
import { twMerge } from "tailwind-merge";

type PrimaryButtonProps = {
  disabled: boolean;
  loading: boolean;
  text: string;
  type?: "submit" | "reset" | "button";
};

const PrimaryButton: FC<PrimaryButtonProps> = ({
  disabled,
  loading,
  text,
  type = "submit",
}) => {
  return (
    <button
      disabled={disabled || loading}
      className={twMerge(
        "w-full h-[52px] text-16 rounded-[100px] py-4 font-semibold text-white",
        disabled
          ? "bg-gray-500 cursor-not-allowed text-opacity-70"
          : "bg-[#D91883] hover:bg-opacity-80",
        loading && "bg-opacity-80"
      )}
      type={type}
    >
      {loading ? "Loading..." : text}
    </button>
  );
};

export default PrimaryButton;

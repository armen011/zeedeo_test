import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CurrentStatuesProps {
  title: string;
  paragraph: string;
  active?: boolean;
  onClick: () => void;
}
const CurrentStatues: FC<CurrentStatuesProps> = ({
  title,
  paragraph,
  active,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={twMerge(
        "w-fit px-6 py-4 rounded-md flex items-center border gap-[6px]",
        active ? "border-[#3B0F84]" : "border-[#A3A3A3]"
      )}
    >
      <div className="text-start h-full">
        <h2 className="text-[#3B0F84] text-18 font-bold ">{title}</h2>
        <p className="text-14 text-[#5E5E5E] max-w-[100px]">{paragraph}</p>
      </div>
      <div
        className={twMerge(
          "w-[30px] h-[30px] flex-shrink-0 rounded-full border-[6px]",
          active ? "border-[#D91883]" : "border-[#A3A3A3]"
        )}
      ></div>
    </button>
  );
};

export default CurrentStatues;

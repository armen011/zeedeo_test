import { FC } from "react";
import { twMerge } from "tailwind-merge";

type StepperProps = {
  count: number;
  step: number;
};

const Stepper: FC<StepperProps> = ({ count, step }) => {
  return (
    <div className="w-full gap-2 flex mb-6">
      {Array.from({ length: count }, (_, idx) => (
        <div
          key={idx}
          className="h-[6px] flex-grow rounded-[4px] max-w-[102px] bg-[#E8E8E8] overflow-hidden"
        >
          {idx <= step && (
            <div className="h-full animate-left-open bg-gradient-to-r from-[#E90181] from-15% to-[#0029FF] transition-colors duration-1000 delay-150" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;

import ResetIcon from "@/assets/icons/reset.svg";
import { FC, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type ResendProps = {
  count: number;
  handleResend: () => void;
};

const Resend: FC<ResendProps> = ({ count, handleResend }) => {
  const [second, setSeconds] = useState(60);

  useEffect(() => {
    if (count < 100) {
      setSeconds(60);
    }
    const interval = setInterval(
      () =>
        setSeconds((prev) => {
          if (prev === 1) {
            clearInterval(interval);
          }
          return prev - 1;
        }),
      1000
    );

    return () => clearInterval(interval);
  }, [count]);

  return (
    <>
      <div className="flex gap-2 items-center mx-auto w-fit">
        {count > 1 && (
          <p className="text-16 text-[#5E5E5E] text-center">
            Please wait in{" "}
            <span className="text-[#D91883] font-bold">{second}</span> Second to
            resend new OTP
          </p>
        )}
      </div>
      <button
        onClick={handleResend}
        disabled={second !== 0 && count > 1}
        type="button"
        className="flex gap-2 items-center mx-auto w-fit"
      >
        <ResetIcon
          className={twMerge(
            "w-[17px] h-[17px]",
            second !== 0 && count > 1
              ? "[&>path]:fill-[#5E5E5E]"
              : "[&>path]:fill-[#0A66C2]"
          )}
        />
        <p
          className={twMerge(
            "text-16 text-center",
            second !== 0 && count > 1
              ? "text-[#5E5E5E]"
              : "text-[#0A66C2] transition-colors"
          )}
        >
          Resend OTP Code
        </p>
      </button>
    </>
  );
};

export default Resend;

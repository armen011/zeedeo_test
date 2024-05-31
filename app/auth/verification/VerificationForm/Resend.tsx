import ResetIcon from "@/assets/icons/reset.svg";
import { FC, useEffect, useState } from "react";

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
  if (second === 0) {
    return (
      <button
        onClick={handleResend}
        type="button"
        className="flex gap-2 items-center mx-auto w-fit"
      >
        <ResetIcon className="w-[17px] h-[17px] [&>path]:fill-[#0A66C2]" />
        <p className="text-16 text-[#0A66C2] text-center">Resend OTP Code</p>
      </button>
    );
  }
  return (
    <div className="flex gap-2 items-center mx-auto w-fit">
      <ResetIcon className="w-[17px] h-[17px]" />
      <p className="text-16 text-[#5E5E5E] text-center">
        Please wait in{" "}
        <span className="text-[#191919] font-bold">{second}</span> Second to
        resend new OTP
      </p>
    </div>
  );
};

export default Resend;

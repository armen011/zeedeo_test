"use client";
import { FC, useEffect, useState } from "react";

type ExpirationProps = {
  count: number;
};

const Expiration: FC<ExpirationProps> = ({ count }) => {
  const [second, setSeconds] = useState(300);

  useEffect(() => {
    if (count < 100) {
      setSeconds(300);
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
      <p className="text-16 text-[#D91883] text-center">This code is expired</p>
    );
  }

  return (
    <p className="text-16 text-[#5E5E5E] text-center">
      This code will expired in
      <span className="text-[#D91883] font-bold ml-1">
        0{Math.floor(second / 60)}:
        {second % 60 > 9 ? second % 60 : `0${second % 60}`}
      </span>
    </p>
  );
};

export default Expiration;

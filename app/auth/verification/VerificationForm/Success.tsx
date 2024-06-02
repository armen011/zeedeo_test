import CheckedIcon from "@/assets/icons/checked.svg";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Success = () => {
  const [second, setSeconds] = useState(5);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 0) {
          clearInterval(interval);
          return prev;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (second === 0) {
      router.push("/auth/sign-in");
    }
  }, [second, router]);

  return (
    <div className="flex flex-col items-center">
      <CheckedIcon className="w-[158px] h-[158px] mb-4" />
      <h6 className="text-24 font-bold mb-2">Verification Successful</h6>
      <p>
        Automatically direct to next page in
        <span className="text-[#D91883] font-bold mx-1">{second}</span> seconds
      </p>
    </div>
  );
};

export default Success;

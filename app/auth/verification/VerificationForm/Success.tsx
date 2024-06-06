import CheckedIcon from "@/assets/icons/checked.svg";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext";
import { signIn } from "next-auth/react";

const Success = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (user?.email && user.password) {
      signIn("credentials", {
        redirect: false,
        email: user.email,
        password: user.password,
        remember: false,
      });
    } else {
      router.push("/auth/sign-in");
    }
  }, [user, router]);

  return (
    <div className="flex flex-col items-center animate-smooth-appear">
      <CheckedIcon className="w-[158px] h-[158px] mb-4" />
      <h6 className="text-24 font-bold mb-2">Verification Successful</h6>
    </div>
  );
};

export default Success;

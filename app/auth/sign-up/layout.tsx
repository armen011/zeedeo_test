"use client";

import { ReactNode } from "react";
import ZeedeoSticker from "../Components/ZeedeoSticker";
import Image from "next/image";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-screen h-screen bg-no-repeat bg-cover bg-center relative px-2 sm:px-9 flex flex-col lg:justify-center items-center lg:items-end overflow-y-auto">
      <Image
        src="/images/sign_up_background.jpg"
        alt="Login background"
        priority
        className="w-full h-full object-cover absolute left-0 top-0 -z-10 animate-smooth-appear"
      />
      <ZeedeoSticker className="lg:absolute mx-auto sm:mx-[unset] left-9 bottom-9 mb-4" />
      {children}
    </main>
  );
};

export default AuthLayout;

"use client";

import { ReactNode } from "react";
import ZeedeoSticker from "../Components/ZeedeoSticker";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-screen h-screen bg-[url('/images/sign_up_background.png')] bg-no-repeat bg-cover bg-center relative px-2 sm:px-9 flex justify-center sm:justify-start items-center">
      <ZeedeoSticker className="absolute mx-auto sm:mx-[unset] lg:right-9 top-0 lg:top-[unset] bottom-[unset] lg:bottom-9" />
      {children}
    </main>
  );
};

export default AuthLayout;

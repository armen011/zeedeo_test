"use client";

import { ReactNode } from "react";
import ZeedeoSticker from "../Components/ZeedeoSticker";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-screen h-screen bg-[url('/images/sign_up_background.jpg')] bg-no-repeat bg-cover bg-center relative px-2 sm:px-9 flex flex-col lg:justify-center items-center lg:items-end overflow-y-auto">
      <ZeedeoSticker className="lg:absolute mx-auto sm:mx-[unset] left-9 bottom-9 mb-4" />
      {children}
    </main>
  );
};

export default AuthLayout;

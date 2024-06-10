"use client";

import { ReactNode, useEffect, useState } from "react";
import ZeedeoSticker from "../Components/ZeedeoSticker";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <main className="w-screen h-screen bg-[url(/images/sign_up_background.jpg)] bg-no-repeat bg-cover bg-center relative px-2 sm:px-9 flex flex-col lg:justify-center items-center lg:items-end overflow-y-auto">
      {!isLoaded && (
        <div className="w-screen h-screen flex justify-center items-center fixed top-0 left-0 bg-white z-40">
          <div className="loader" />
        </div>
      )}
      <ZeedeoSticker className="lg:absolute mx-auto sm:mx-[unset] left-9 bottom-9 mb-4" />
      {children}
    </main>
  );
};

export default AuthLayout;

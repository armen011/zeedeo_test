"use client";
import { ReactNode, useEffect, useState } from "react";
import ZeedeoIcon from "@/assets/icons/logo.svg";

const Layout = ({ children }: { children: ReactNode }) => {
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
    <main className="w-screen h-screen bg-[url('/images/reset_backgroud.jpg')] bg-no-repeat bg-cover bg-center px-2 sm:px-9 flex justify-center lg:justify-start items-center">
      {!isLoaded && (
        <div className="w-screen h-screen flex justify-center items-center fixed top-0 left-0 bg-white z-40">
          <div className="loader" />
        </div>
      )}
      <div className="absolute top-4 lg:top-[unset] lg:right-9 lg:bottom-9">
        <ZeedeoIcon className="w-[227px]" />
        <p className="text-36 text-white hidden lg:block">
          Together, We are always different
        </p>
      </div>
      {children}
    </main>
  );
};

export default Layout;

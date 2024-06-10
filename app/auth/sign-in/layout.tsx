"use client";
import { ReactNode, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

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

  const userName = localStorage.getItem("user.name");

  return (
    <main
      className={twMerge(
        userName
          ? "bg-[url('/images/login_background_second.jpg')]"
          : "bg-[url('/images/login_background.jpg')]",
        "w-screen h-screen bg-no-repeat bg-cover bg-center relative px-2 sm:px-9 flex justify-center lg:justify-end items-center"
      )}
    >
      {!isLoaded && (
        <div className="w-screen h-screen flex justify-center items-center fixed top-0 left-0 bg-white z-40">
          <div className="loader" />
        </div>
      )}
      {children}
    </main>
  );
};

export default Layout;

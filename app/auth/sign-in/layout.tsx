"use client";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Layout = ({ children }: { children: ReactNode }) => {
  const userName = localStorage.getItem("user.name");

  return (
    <main
      className={twMerge(
        userName
          ? "bg-[url('/images/login_background_second.png')]"
          : "bg-[url('/images/login_background.png')]",
        "w-screen h-screen bg-no-repeat bg-cover bg-center relative px-2 sm:px-9 flex justify-center lg:justify-end items-center"
      )}
    >
      {children}
    </main>
  );
};

export default Layout;

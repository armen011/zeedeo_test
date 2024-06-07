"use client";
import Image from "next/image";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Layout = ({ children }: { children: ReactNode }) => {
  const userName = localStorage.getItem("user.name");

  return (
    <main
      className={twMerge(
        // userName
        //   ? "bg-[url('/images/login_background_second.jpg')]"
        //   : "bg-[url('/images/login_background.jpg')]",
        "w-screen h-screen bg-no-repeat bg-cover bg-center relative px-2 sm:px-9 flex justify-center lg:justify-end items-center"
      )}
    >
      <Image
        src={
          userName
            ? "/images/login_background_second.jpg"
            : "/images/login_background.jpg"
        }
        alt="Login background"
        width={1090}
        height={1080}
        priority
        className="w-full h-full object-cover absolute left-0 top-0 -z-10"
      />
      {children}
    </main>
  );
};

export default Layout;

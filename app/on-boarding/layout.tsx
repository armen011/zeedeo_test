"use client";

import { signOut } from "next-auth/react";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <button
        className="fixed right-6 top-6 z-10 rounded border border-gray-500 px-2 py-1"
        onClick={() => signOut()}
      >
        Log out
      </button>
      {children}
    </>
  );
};

export default Layout;

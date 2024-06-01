import Image from "next/image";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <main className="w-screen h-screen flex">{children}</main>;
};

export default Layout;

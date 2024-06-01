import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-screen h-screen bg-[url('/images/login_background.png')] bg-no-repeat bg-cover bg-center relative px-2 sm:px-9 flex justify-center lg:justify-end items-center">
      {children}
    </main>
  );
};

export default Layout;

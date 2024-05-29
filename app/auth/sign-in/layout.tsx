import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-screen h-screen bg-[url('/images/login_background.png')] bg-no-repeat bg-cover bg-center relative px-6 sm:px-9 flex justify-center sm:justify-end items-center">
      {children}
    </main>
  );
};

export default Layout;

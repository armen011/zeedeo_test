import { ReactNode } from "react";
import ZeedeoIcon from "@/assets/icons/logo.svg";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-screen h-screen bg-[url('/images/reset_backgroud.jpg')] bg-no-repeat bg-cover bg-center px-2 sm:px-9 flex justify-center lg:justify-start items-center">
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

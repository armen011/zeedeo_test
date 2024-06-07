import Image from "next/image";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-screen h-screen flex">
      <Image
        src="/images/verification_background.jpg"
        width={450}
        height={786}
        alt="side_image"
        className="h-full hidden lg:block"
      />
      <div className="flex-grow h-full bg-white p-6 md:p-9 relative flex items-center justify-center">
        {children}
      </div>
    </main>
  );
};

export default Layout;

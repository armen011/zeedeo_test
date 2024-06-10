import { redirect } from "next/navigation";
import React from "react";
import VerificationForm from "./VerificationForm";
import Image from "next/image";

const VerificationPage = ({
  searchParams,
}: {
  searchParams: { email?: string };
}) => {
  if (!searchParams.email) {
    redirect("/auth/sign-up");
  }
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
        <VerificationForm email={searchParams.email} />;
      </div>
    </main>
  );
};

export default VerificationPage;

import { redirect } from "next/navigation";
import React from "react";
import VerificationForm from "./VerificationForm";

const VerificationPage = ({
  searchParams,
}: {
  searchParams: { email?: string };
}) => {
  if (!searchParams.email) {
    redirect("/auth/sign-up");
  }
  return <VerificationForm email={searchParams.email} />;
};

export default VerificationPage;

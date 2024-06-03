"use client";
import { useContext } from "react";
import SignUpView from "./SignUpView";
import TypeSelectView from "./TypeSelectView";
import { AuthContext } from "../AuthContext";

const SignUpPage = () => {
  const { user, error } = useContext(AuthContext);

  if (user && !error) {
    return <TypeSelectView />;
  }

  return <SignUpView />;
};

export default SignUpPage;

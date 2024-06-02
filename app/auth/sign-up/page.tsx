"use client";

import { useState } from "react";
import SignUpView from "./SignUpView";
import TypeSelectView from "./TypeSelectView";

const SignUpPage = () => {
  const [user, setUser] = useState<
    { email: string; password: string } | undefined
  >(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  if (user && !error) {
    return <TypeSelectView {...user} setError={(msg) => setError(msg)} />;
  }

  return (
    <SignUpView
      error={error}
      setUser={(email, password) => {
        setError(undefined);
        setUser({ email, password });
      }}
    />
  );
};

export default SignUpPage;

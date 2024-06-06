"use client";

import { ReactNode } from "react";
import { Provider } from "./AuthContext";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <Provider>{children}</Provider>;
};

export default AuthLayout;

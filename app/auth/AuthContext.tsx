"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FC, ReactNode, createContext, useEffect, useState } from "react";

type UserType = {
  name: string;
  email: string;
  password: string;
  profile: string;
};

export const AuthContext = createContext<{
  user: UserType | undefined;
  error: string | undefined;
  handleSetUser: (user: UserType) => void;
  onError: (error: string) => void;
}>({
  user: undefined,
  error: undefined,
  handleSetUser: () => {},
  onError: () => {},
});

type ProviderProps = {
  children: ReactNode;
};

export const Provider: FC<ProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserType | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const { status } = useSession();
  const router = useRouter();

  const handleSetUser = (user: UserType) => setUser(user);
  const onError = (error: string) => setError(error);

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading" || status === "authenticated") {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="loader" />
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, error, handleSetUser, onError }}>
      {children}
    </AuthContext.Provider>
  );
};

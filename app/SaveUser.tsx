"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const SaveUser = () => {
  const { data } = useSession();
  useEffect(() => {
    console.log("DATA", data);

    if (data?.user.name) {
      localStorage.setItem("user.name", data?.user.name);
    }
  }, [data]);

  return null;
};

export default SaveUser;

"use client";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const HomePage = () => {
  const { status, data } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated" && !data?.user.isOnBoarded) {
      router.push("/on-boarding");
    }
  }, [status, data?.user, router]);
  return (
    <main className="w-screen h-screen bg-white text-black">
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{data?.user.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{data?.user.email}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => signOut()}>Log Out</button>
    </main>
  );
};

export default HomePage;

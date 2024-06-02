"use client";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const HomePage = () => {
  const { status, data } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated" && !data?.user.isOnBoarded) {
      router.push(`/on-boarding/${data.user.isCompany ? "company" : "user"}`);
    }
  }, [status, data?.user, router]);
  const userImage = data?.user?.image;

  return (
    <main className="w-screen h-screen bg-white text-black flex flex-col justify-center items-center">
      <div className="rounded-full w-20 h-20 border border-green-500 overflow-hidden">
        {userImage && (
          <Image
            src={userImage}
            alt="Profile picture"
            width={64}
            height={64}
            className="w-full h-full"
          />
        )}
      </div>
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
          <tr>
            <td>Profile</td>
            <td>{data?.user.profileType}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => signOut()}>Log Out</button>
    </main>
  );
};

export default HomePage;

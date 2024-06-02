import ZeedeoIcon from "@/assets/icons/logo.svg";
import Image from "next/image";
import Catagories from "./Catagories";
import { FC } from "react";

type TypeSelectViewProps = {
  email: string;
  password: string;
  setError: (message: string) => void;
};

const TypeSelectView: FC<TypeSelectViewProps> = ({
  email,
  password,
  setError,
}) => {
  return (
    <main className="w-screen h-screen overflow-hidden flex relative">
      <ZeedeoIcon className="w-56 absolute bottom-8 left-4 hidden lg:block " />
      <Image
        src="/images/select_profile_category_background.png"
        width={450}
        height={786}
        alt="side_image"
        className="h-full hidden lg:block animate-smooth-appear"
        priority
      />
      <div className="flex-grow h-full flex flex-col justify-center bg-white p-6 md:p-9">
        <div className="w-full lg:h-full flex flex-col max-w-[750px] mx-auto lg:mx-[unset] md:pt-[100px] lg:pl-[44px]">
          <h1 className="text-2xl font-semibold text-[#191919] mb-4 ml-3">
            Select your profile
          </h1>
          <p className="text-[#5E5E5E] ml-3 mb-6">
            Choose your profile category that best fits your skills and
            preferences.
          </p>
          <Catagories email={email} password={password} setError={setError} />
        </div>
      </div>
    </main>
  );
};

export default TypeSelectView;

import Link from "next/link";
import ZeedeoSticker from "../Components/ZeedeoSticker";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
  return (
    <>
      <ZeedeoSticker className="absolute mx-auto sm:mx-[unset] lg:right-9 top-0 lg:top-[unset] bottom-[unset] lg:bottom-9" />
      <div className="w-full bg-white max-w-[500px] rounded-2xl p-6 pt-7 sm:p-9 sm:pt-10">
        <h4 className="text-3xl sm:text-36 text-[#191919] font-bold mb-2">
          Welcome on Zeedeo !
        </h4>
        <div className="flex items-center gap-1 mb-4">
          <p className="text-16 text-[#5E5E5E]">Have already an account?</p>
          <Link
            href={"/auth/sign-in"}
            className="text-16 text-[#0A66C2] font-semibold"
          >
            Login Here
          </Link>
        </div>
        <SignUpForm />
      </div>
    </>
  );
};

export default SignUpPage;

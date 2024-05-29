import Link from "next/link";
import ZeedeoSticker from "../Components/ZeedeoSticker";
import LoginForm from "./LoginForm";

const SignInPage = () => {
  return (
    <>
      <ZeedeoSticker className="absolute mx-auto sm:mx-[unset] sm:left-9 bottom-0 sm:bottom-9" />
      <div className="w-full bg-white max-w-[500px] rounded-2xl p-6 pt-7 sm:p-9 sm:pt-10">
        <h4 className="text-36 text-[#191919] font-bold mb-2">Login</h4>
        <div className="flex items-center gap-1 mb-4">
          <p className="text-16 text-[#5E5E5E]">Not have an account?</p>
          <Link
            href={"/auth/sign-up"}
            className="text-16 text-[#0A66C2] font-semibold"
          >
            Register Here
          </Link>
        </div>
        <LoginForm />
      </div>
    </>
  );
};

export default SignInPage;

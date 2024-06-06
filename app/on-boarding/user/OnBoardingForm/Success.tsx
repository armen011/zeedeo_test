import { useRouter } from "next/navigation";
import CheckedIcon from "@/assets/icons/checked.svg";
import SecondaryButton from "@/components/SecondaryButton";

const Success = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center animate-smooth-appear">
      <CheckedIcon className="w-[158px] h-[158px] mb-4" />
      <h6 className="text-24 font-bold mb-2 text-center">
        You have just created your account!{" "}
      </h6>
      <p className="mb-9 text-16 text-[#5E5E5E] text-center">
        Your journey Starts Now on Zeedeo! Happy Start!
      </p>
      <SecondaryButton
        text="Done"
        className="w-full max-w-[226px]"
        onClick={() => router.push("/")}
      />
    </div>
  );
};

export default Success;

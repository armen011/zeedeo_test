import ZeedeoIcon from "@/assets/icons/logo.svg";
import CategoryButton from "@/components/CategoryButton";
import FormCategories from "@/components/form/FormCategories";

const Onboarding = () => {
  return (
    <section className="w-screen h-screen flex">
      <div className="h-full min-w-[450px] bg-[url('/images/select_profile_category_background.png')] bg-no-repeat bg-cover bg-center relative">
        <ZeedeoIcon className="w-56" />
      </div>
      <div className="px-20 pt-28">
        <h1 className="text-2xl font-semibold ml-2">Select your profile</h1>
        <p className="text-[#5E5E5E] mt-2 ml-3">
          Choose your profile category that best fits your skills and
          preferences.
        </p>
        <FormCategories />
      </div>
    </section>
  );
};

export default Onboarding;

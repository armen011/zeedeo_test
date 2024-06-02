"use client";
import BookIcon from "@/assets/icons/book.svg";
import FlashIcon from "@/assets/icons/flash.svg";
import FlatIcon from "@/assets/icons/flat.svg";
import PeopleIcon from "@/assets/icons/people.svg";
import StudentIcon from "@/assets/icons/student.svg";
import UniversityIcon from "@/assets/icons/university.svg";
import CategoryButton from "@/components/CategoryButton";
import SecondaryButton from "@/components/SecondaryButton";
import { getOptions } from "@/utils/options";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { registerUser } from "@/utils/auth/sign-up";

const companyCategories = [
  FlatIcon,
  FlashIcon,
  UniversityIcon,
  PeopleIcon,
  StudentIcon,
  BookIcon,
];

type CatagoriesProps = {
  email: string;
  password: string;
  setError: (message: string) => void;
};

const Catagories: FC<CatagoriesProps> = ({ email, password, setError }) => {
  const [selectedProfileId, setSelectedProfileId] = useState<
    number | undefined
  >(undefined);

  const router = useRouter();

  const { data: options } = useQuery({
    queryKey: ["profile-options"],
    queryFn: () => getOptions(),
  });

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      router.push(`/auth/verification?email=${email}`);
    },
    onError: (err) => {
      console.log("here", err);
      const error = err as { message: string };
      setError(error.message);
    },
  });

  return (
    <div className="flex-grow flex flex-col sm:justify-between items-center overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {options?.profiles?.map((item, idx) => {
          const Icon = companyCategories[idx];
          return (
            <CategoryButton
              onClick={() => setSelectedProfileId(item.id)}
              key={item.id}
              title={item.name}
              active={selectedProfileId === item.id}
            >
              <Icon className="w-6 sm:w-10" />
            </CategoryButton>
          );
        })}
      </div>
      <SecondaryButton
        disabled={!selectedProfileId}
        text="Next"
        className="w-full max-w-[258px] text-16 h-[45px] items-center text-white py-[unset] mt-10"
        onClick={() => {
          mutation.mutate({
            email,
            password,
            profileId: `${selectedProfileId}`,
          });
        }}
        loading={mutation.isPending}
        type="button"
      />
    </div>
  );
};

export default Catagories;

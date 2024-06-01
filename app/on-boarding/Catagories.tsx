"use client";
import BookIcon from "@/assets/icons/book.svg";
import FlashIcon from "@/assets/icons/flash.svg";
import FlatIcon from "@/assets/icons/flat.svg";
import PeopleIcon from "@/assets/icons/people.svg";
import StudentIcon from "@/assets/icons/student.svg";
import UniversityIcon from "@/assets/icons/university.svg";
import CategoryButton from "@/components/CategoryButton";
import SecondaryButton from "@/components/SecondaryButton";
import { useRouter } from "next/navigation";
import { useState } from "react";

const companyCategories = [
  {
    id: 1,
    title: "Company",
    icon: FlatIcon,
    type: "company",
  },
  {
    id: 2,
    title: "Startup Founder",
    icon: FlashIcon,
    type: "company",
  },
  {
    id: 3,
    title: "University",
    icon: UniversityIcon,
    type: "company",
  },
  {
    id: 4,
    title: "Professional",
    icon: PeopleIcon,
    type: "user",
  },
  {
    id: 5,
    title: "Graduate",
    icon: StudentIcon,
    type: "user",
  },
  {
    id: 6,
    title: "Student",
    icon: BookIcon,
    type: "user",
  },
];

const Catagories = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    { type: string; value: string } | undefined
  >(undefined);

  const router = useRouter();

  return (
    <div className="flex-grow flex flex-col sm:justify-between items-center overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {companyCategories.map((item) => (
          <CategoryButton
            onClick={() =>
              setSelectedCategory({ type: item.type, value: item.title })
            }
            key={item.id}
            title={item.title}
            active={selectedCategory?.value === item.title}
          >
            <item.icon className="w-6 sm:w-10" />
          </CategoryButton>
        ))}
      </div>
      <SecondaryButton
        disabled={!selectedCategory}
        text="Next"
        className="w-full max-w-[258px] text-16 h-[45px] items-center text-white py-[unset] mt-10"
        onClick={() => router.push(`/on-boarding/${selectedCategory?.type}`)}
        type="button"
      />
    </div>
  );
};

export default Catagories;

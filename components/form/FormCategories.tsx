import BookIcon from "@/assets/icons/book.svg";
import FlashIcon from "@/assets/icons/flash.svg";
import FlatIcon from "@/assets/icons/flat.svg";
import PeopleIcon from "@/assets/icons/people.svg";
import StudentIcon from "@/assets/icons/student.svg";
import UnivercityIcon from "@/assets/icons/university.svg";
import CategoryButton from "../CategoryButton";

const categories = [
  {
    id: 1,
    title: "Company",
    icon: FlatIcon,
  },
  {
    id: 2,
    title: "Startup Founder",
    icon: FlashIcon,
  },
  {
    id: 3,
    title: "University",
    icon: UnivercityIcon,
  },
  {
    id: 4,
    title: "Professional",
    icon: PeopleIcon,
  },
  {
    id: 5,
    title: "Graduate",
    icon: StudentIcon,
  },
  {
    id: 6,
    title: "Student",
    icon: BookIcon,
  },
];

const FormCategories = () => {
  return (
    <form className="w-fit flex flex-col items-center">
      <div className="w-full flex flex-wrap gap-4 mt-12">
        {categories.map((item) => (
          <CategoryButton key={item.id} title={item.title}>
            <item.icon />
          </CategoryButton>
        ))}
      </div>
      <button className="w-[258px] text-16 rounded-[100px] py-2 bg-[#38B469] text-white font-semibold mt-40">
        Next
      </button>
    </form>
  );
};

export default FormCategories;

import Image from "next/image";
import { getImageUrl, getStep, getTitleAndText, imageUrls } from "./utils";
import Stepper from "@/components/Stepper";
import OnBoardingForm from "./OnBoardingForm";

const CompanyOnBoardingPage = async ({
  searchParams,
}: {
  searchParams: { category?: string; step?: number };
}) => {
  const step = getStep(searchParams.step);
  const { title, paragraph, link } = getTitleAndText(step);

  return (
    <>
      {imageUrls.map(
        (url, idx) =>
          idx === step && (
            <Image
              src={`/images/${url}.jpg`}
              width={450}
              height={786}
              alt="side_image"
              className="h-full hidden lg:block animate-smooth-appear"
              key={idx}
            />
          )
      )}
      <div className="flex-grow h-full bg-white p-6 md:p-9 relative flex items-center justify-center animate-smooth-appear">
        <div className="w-full h-full flex flex-col max-w-[590px]">
          <h6 className="text-[#191919] text-24 font-semibold mb-4">{title}</h6>
          <p className="text-[#5E5E5E] text-16 mb-4">
            {paragraph}
            {link && (
              <>
                <a
                  target="_blank"
                  href={link.href}
                  className="ml-1 text-[#0029FF]"
                >
                  {link.title}
                </a>
                .
              </>
            )}
          </p>
          <Stepper count={4} step={step} />
          <OnBoardingForm step={step} />
        </div>
      </div>
    </>
  );
};

export default CompanyOnBoardingPage;

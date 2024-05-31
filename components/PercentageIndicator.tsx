import React, { useState, ChangeEvent } from "react";
import MaleIcon from "@/assets/icons/male.svg";
import FemailIcon from "@/assets/icons/female.svg";

const PercentageIndicator = () => {
  const [value, setValue] = useState(0);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <div className="w-full relative pt-6 flex flex-col gap-4">
      <div className="flex justify-between">
        <div className="py-1 px-3 relative bg-[#0A66C2] rounded-md flex justify-center items-center gap-2">
          <div className="w-2 h-2 rotate-45 -bottom-1 left-6 bg-[#0A66C2] absolute"></div>
          <MaleIcon />
          Male
        </div>
        <div className="py-1 px-3 relative bg-[#B33EBA] rounded-md flex justify-center items-center gap-2">
          <div className="w-2 h-2 rotate-45 -bottom-1 left-6 bg-[#B33EBA] absolute"></div>
          <FemailIcon />
          Female
        </div>
      </div>
      <input
        type="range"
        value={value}
        onChange={handleInputChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        style={{
          backgroundImage: `linear-gradient(to right, #6976EB ${value}%, #B33EBA 0%)`,
          WebkitAppearance: "none",
        }}
      />
      <div className="flex justify-between">
        <span className="w-28 h-11 rounded-[100px] border border-[#6976EB] text-[#6976EB] flex justify-center items-center">
          {value}%
        </span>
        <span className="w-28 h-11 rounded-[100px] border border-[#B33EBA] text-[#B33EBA] flex justify-center items-center">
          {100 - value}%
        </span>
      </div>
    </div>
  );
};

export default PercentageIndicator;

"use client";

import { ChangeEvent, FC, useState } from "react";
import PhotoCropper from "./PhotoCropper";
import ImageIcon from "@/assets/icons/image.svg";
import Image from "next/image";

type ProfileUploadProps = {
  onUpload: (image: string) => void;
  file: string;
};

const ProfileUpload: FC<ProfileUploadProps> = ({ onUpload, file }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedFile(files[0]);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleCrop = (croppedImageUrl: string) => {
    // setCroppedImage(croppedImageUrl);
    onUpload(croppedImageUrl);
    setSelectedFile(null);
  };

  const onCloseModal = () => {
    setSelectedFile(null);
  };

  return (
    <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
      {!!selectedFile && (
        <PhotoCropper
          image={selectedFile}
          onCrop={handleCrop}
          onCloseModal={onCloseModal}
        />
      )}
      <div className="w-36 h-36 rounded-full flex justify-center items-center bg-[#E8E8E8] overflow-hidden">
        {file ? (
          <Image
            src={file}
            alt="profile image"
            className="w-full h-full object-contain"
            width={144}
            height={144}
          />
        ) : (
          <ImageIcon className="w-[30px]" />
        )}
      </div>
      <div className="flex flex-col sm:items-start items-center gap-[10px]">
        <button className="relative w-fit p-3 rounded-[100px] border border-[#7B44D3] flex justify-center items-center gap-[10px] cursor-pointer">
          <input
            type="file"
            className="opacity-0 absolute w-full h-full"
            accept=".png, .jpg, .jpeg"
            onChange={handleFileChange}
          />
          <p className="text-black">{<ImageIcon className="w-[14px]" />}</p>
          <p className="text-[#191919] font-semibold text-10">Upload LOGO</p>
        </button>
        <p className="text-[#5E5E5E] text-14">
          Allowed file types: png, jpg, jpeg.
        </p>
      </div>
    </div>
  );
};

export default ProfileUpload;

"use client";

import { ChangeEvent, DragEvent, useState } from "react";
import PhotoCropper from "./PhotoCropper";

const ProfileUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);

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
    setCroppedImage(croppedImageUrl);
    setSelectedFile(null);
  };

  const onCloseModal = () => {
    setSelectedFile(null);
  };

  console.log(croppedImage, "<<<<<<<<<<<<<<<<<<<");

  return (
    <div className="flex justify-center items-center gap-4">
      {!!selectedFile && (
        <PhotoCropper
          image={selectedFile}
          onCrop={handleCrop}
          onCloseModal={onCloseModal}
        />
      )}
      <div className="w-36 h-36 rounded-full flex justify-center items-center bg-[#E8E8E8] overflow-hidden">
        {croppedImage ? (
          <img
            src={croppedImage}
            alt="profile image"
            className="w-full h-full object-contain"
          />
        ) : (
          "icon"
        )}
      </div>
      <div className="flex flex-col gap-[10px]">
        <button className="relative w-36 py-3 rounded-[100px] border border-[#7B44D3] flex justify-center items-center gap-[10px]">
          <input
            type="file"
            className="opacity-0 absolute w-full h-full"
            accept=".png, .jpg, .jpeg"
            onChange={handleFileChange}
          />
          <p className="text-black">icon</p>
          <p className="text-[#191919] font-semibold">Upload LOGO</p>
        </button>
        <p className="text-[#5E5E5E]">Allowed file types: png, jpg, jpeg.</p>
      </div>
    </div>
  );
};

export default ProfileUpload;

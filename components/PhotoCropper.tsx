"use client";

import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { FC, useRef } from "react";

interface PhotoCropperProps {
  image: File;
  onCrop: (croppedImage: string) => void;
  onCloseModal: () => void;
}

const PhotoCropper: FC<PhotoCropperProps> = ({
  image,
  onCrop,
  onCloseModal,
}) => {
  const cropperRef = useRef<any>(null);
  const handleCrop = () => {
    if (cropperRef.current) {
      const croppedCanvas = cropperRef.current.cropper.getCroppedCanvas();
      const croppedImageUrl = croppedCanvas.toDataURL("image/png");
      onCrop(croppedImageUrl);
    }
  };

  const imageUrl = URL.createObjectURL(image);
  return (
    <div className="absolute w-full h-full top-0 left-0 bg-black/50 flex items-center justify-center z-50">
      <div className="w-fit h-fit max-w-[755px] max-h-[630px] bg-white rounded-sm flex flex-col justify-center items-end px-6 pt-4 pb-4">
        <div onClick={onCloseModal} className="text-black mb-4 cursor-pointer">
          icon
        </div>
        <div className="bg-black w-fit h-fit">
          <Cropper
            ref={cropperRef}
            style={{ height: 400, width: "100%" }}
            zoomTo={0.5}
            initialAspectRatio={1}
            preview=".img-preview"
            src={imageUrl}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false}
            guides={true}
          />
        </div>
        <button
          type="button"
          onClick={handleCrop}
          className="w-[120px] py-2 bg-[#1374AF] rounded-[50px] text-white font-semibold text-sm mt-8"
        >
          Crop PHOTO
        </button>
      </div>
    </div>
  );
};

export default PhotoCropper;

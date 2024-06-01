import ZeedeoIcon from "@/assets/icons/logo.svg";
import { FC } from "react";

type ZeedeoStickerProps = {
  className?: string;
};

const ZeedeoSticker: FC<ZeedeoStickerProps> = ({ className }) => {
  return (
    <div className={className}>
      <ZeedeoIcon className="w-64 sm:w-72 lg:w-80" />
      <p className="hidden lg:block text-36 lg:text-42 text-white">
        Your <b>Social app</b> making
      </p>
      <p className="hidden lg:block text-36 lg:text-42  text-white">
        your <b>Video Stand Out!</b>
      </p>
    </div>
  );
};

export default ZeedeoSticker;

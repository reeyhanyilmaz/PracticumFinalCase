import React from "react";
import ModalButton from "../../../components/ModalButton";
import ModalCloseButton from "../../../components/ModalCloseButton";
import Image from "next/image";

//redux
import {
  useFileImage,
  useSelectedColor,
  useSelectedModal,
  useSelectedModalSize,
} from "../../../redux/modalSlice";

function InstallLocalNowModal() {
  const fileImage = useFileImage();
  const size = useSelectedModalSize();
  const selectedModal = useSelectedModal();
  const color = useSelectedColor();

  //for image loader
  const src = fileImage;

  return (
    <div className={`generalModalStyle flex-col font-[Inter]`}>
      <ModalCloseButton />
      <Image
        unoptimized
        loader={() => src}
        src={
          selectedModal && fileImage
            ? fileImage
            : "/assets/modal/installLocalNowModalImage.svg"
        }
        width={size * 240}
        height={size * 150}
        className="rounded-t-[8px]"
      />
      <div className={`generalPosition py-[20px] px-[10px] flex-col`}>
        <p
          className={`text-${
            size === 1 ? "xl" : size === 2 ? "2xl" : "3xl"
          } font-bold`}
          style={{ fontSize: size === 3 ? "35px" : "" }}
        >
          Install Local Now
        </p>
        <p
          className={`text-${
            size === 1 ? "lg" : size === 2 ? "xl" : "2xl"
          } mt-[10px] font-normal`}
        >
          We’ve gone native, try it!
        </p>
        <div className="grid gap-[14.5px] mt-[20px]">
          <ModalButton
            title="Continue"
            width={size * 175}
            border={color === "#FFFFFF" ? "1px solid #D2DAE3" : "none"}
            color={color === "#FFFFFF" ? "#000000" : "#fff"}
            bg={color}
          />
          <ModalButton
            title="Not Now"
            width={size * 175}
            border="1px solid #D2DAE3"
            bg="#fff"
          />
        </div>
      </div>
    </div>
  );
}

export default InstallLocalNowModal;

import React from "react";
import ModalButton from "../../../components/ModalButton";
import ModalCloseButton from "../../../components/ModalCloseButton";
import Image from "next/image";

//redux
import {
  useFileUrl,
  useSelectedColor,
  useSelectedModal,
  useSelectedModalSize,
} from "../../../redux/modalSlice";

function InstallLocalNowModal() {
  const fileUrl = useFileUrl();
  const size = useSelectedModalSize();
  const selectedModal = useSelectedModal();
  const color = useSelectedColor();

  //for image loader
  const src = fileUrl;

  return (
    <div
      className={`generalModalStyle flex-col w-[${size * 240}] h-[${
        size * 300
      }] font-[Inter]`}
    >
      <ModalCloseButton />
      <Image
        unoptimized
        loader={() => src}
        src={
          selectedModal && fileUrl
            ? fileUrl
            : "/assets/modal/installLocalNowModalImage.svg"
        }
        width={size * 240}
        height={size * 150}
      />
      <div
        className={`generalPosition py-[39px] flex-col w-full h-[${
          size * 150
        }]`}
      >
        <p
          className={`mb-[20px] text-${
            size === 1 ? "xl" : size === 2 ? "2xl" : "3xl"
          } font-bold`}
          style={{ fontSize: size === 3 ? "50px" : "" }}
        >
          Install Local Now
        </p>
        <p
          className={`mb-[20px] text-${
            size === 1 ? "lg" : size === 2 ? "xl" : "2xl"
          } font-normal`}
        >
          We’ve gone native, try it!
        </p>
        <div className="grid gap-[14.5px]">
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

import React from "react";
import ModalCloseButton from "../../../components/ModalCloseButton";
import Image from "next/image";
import ModalInput from "../../../components/ModalInput";
import ModalButton from "../../../components/ModalButton";

//redux
import {
  useSelectedColor,
  useSelectedModalSize,
  useFileLogo,
  useSelectedModal,
} from "../../../redux/modalSlice";
import { getTailWindBg } from "../../../utils/utils";

function SecurityCodeModal() {
  const size = useSelectedModalSize();
  const color = useSelectedColor();
  const fileLogo = useFileLogo();
  const selectedModal = useSelectedModal();

    //for image loader
    const src = fileLogo;

  return (
    <div className={`generalModalStyle p-[20px] flex-col font-[Inter]`}>
      <ModalCloseButton />
      <div
        className={`generalPosition ${getTailWindBg(color)} mb-[29px] rounded-[50%] ${color === "#FFFFFF"&& "border border-black"}`}
        style={{
          height: size === 1 ? "65px" : size === 2 ? "90px" : "135px",
          width: size === 1 ? "65px" : size === 2 ? "90px" : "135px",
        }}
      >
        <Image
          // src={color=== "#FFFFFF" ? "/assets/modal/securityCodeLogoContent2.svg":"/assets/modal/securityCodeLogoContent.svg"}
          unoptimized
          loader={() => src}
          src={
            selectedModal && fileLogo
              ? fileLogo
              : color=== "#FFFFFF" ? "/assets/modal/securityCodeLogoContent2.svg" : "/assets/modal/securityCodeLogoContent.svg"
          }
          width={size === 1 ? "30px" : size === 2 ? "40px" : "60px"}
          height={size === 1 ? "30px" : size === 2 ? "40px" : "60px"}
        className="rounded-full"
        />
      </div>
      <p
        className={`mb-[20px] text-${
          size === 1 ? "xl" : size === 2 ? "2xl" : "3xl"
        } font-bold`}
        style={{ fontSize: size === 3 ? "35px" : "" }}
      >
        Security Code
      </p>
      <p
        className={`mb-[41.5px]  text-${
          size === 1 ? "lg" : size === 2 ? "xl" : "2xl"
        } font-normal`}
      >
        This code expires in 24 hours
      </p>
      <ModalInput placeholder="Code" width={size * 175} />
      <div className="grid grid-cols-2 gap-[14.5px] mt-[30.5px]">
        {/* <div className="flex justify-center gap-[14.5px] mt-[30.5px]"> */}
        <ModalButton
          title="Cancel"
          width={size * 84}
          border="1px solid #D2DAE3"
          bg="#fff"
        />
        <ModalButton
          title="Continue"
          width={size * 84}
          border={color === "#FFFFFF" ? "1px solid #D2DAE3" : "none"}
          color={color === "#FFFFFF" ? "#000000" : "#fff"}
          bg={color}
        />
      </div>
    </div>
  );
}

export default SecurityCodeModal;

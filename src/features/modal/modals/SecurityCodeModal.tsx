import React from "react";
import ModalCloseButton from "../../../components/ModalCloseButton";
import Image from "next/image";
import ModalInput from "../../../components/ModalInput";
import ModalButton from "../../../components/ModalButton";

//redux
import {
  useFileUrl,
  useSelectedColor,
  useSelectedModal,
  useSelectedModalSize,
} from "../../../redux/modalSlice";

function SecurityCodeModal() {
  const fileUrl = useFileUrl();
  const size = useSelectedModalSize();
  const selectedModal = useSelectedModal();
  const color = useSelectedColor();

  return (
    <div
      className={`generalModalStyle p-[20px] flex-col w-[${size * 240}] h-[${
        size * 223
      }] font-[Inter]`}
      style={{height: size === 1 ? "223px" :  size === 2 ? "446px" : "668px", width: size === 1 ? "240px" :  size === 2 ? "480px" : "720px"}}

    >
      <ModalCloseButton />
      <div
        className={`generalPosition bg-primaryColor  mb-[29px] rounded-[50%]`}
        style={{height: size === 1 ? "45px" :  size === 2 ? "90px" : "135px", width: size === 1 ? "45px" :  size === 2 ? "90px" : "135px"}}
      >
        <Image
          src="/assets/modal/securityCodeLogoContent.svg"
          width={size * 18}
          height={size * 22}
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
      <ModalInput placeholder="Code" />
      <div className="grid grid-cols-2 gap-[14.5px] mt-[30.5px]">
        <ModalButton
          title="Cancel"
          width={167}
          border="1px solid #D2DAE3"
          bg="#fff"
        />
        <ModalButton
          title="Continue"
          width={168}
          border={color === "#FFFFFF" ? "1px solid #D2DAE3" : "none"}
          color={color === "#FFFFFF" ? "#000000" : "#fff"}
          bg={color}
        />
      </div>
    </div>
  );
}

export default SecurityCodeModal;

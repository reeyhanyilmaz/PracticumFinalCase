import React from "react";
import Image from "next/image";
import ModalInput from "../../../components/ModalInput";
import ModalButton from "../../../components/ModalButton";
//redux
import { useFileUrl, useSelectedModal } from "../../../redux/modalSlice";

function SignUpShoeModal() {
  const fileUrl = useFileUrl();

  //for image loader
  const src = fileUrl;
  const selectedModal = useSelectedModal();
  return (
    <div className="flex flex-row w-[740px] h-[389px] font-['Poppins']">
      {/* left part */}
      <div className="flex flex-col w-[400px] justify-center items-center ">
        <p className="text-[30px] font-semibold">Sign Up</p>
        <p className="mt-[10px] text-[16px]">Join new adventure</p>
        <div className="grid grid-cols gap-[15px] mt-[30px]">
          <ModalInput
            placeholder="Enter full name"
            height={44}
            width={300}
            pl={12}
            size={14}
          />
          <ModalInput
            placeholder="Enter your mail"
            height={44}
            width={300}
            pl={12}
            size={14}
          />
          <ModalButton
            title="Sign Up"
            width={300}
            height={44}
            border=""
            bg="#F37C34"
            color="#fff"
            size={14}
            weight={600}
          />
        </div>
        <p className="w-[209px] h-[14px] mt-[15px] text-[#777777] text-[10px]">
          By signing up, you agree to Privacy Policy
        </p>
      </div>

      {/* right part (shoes image) */}
      <div className="part2 relative ">
        <Image
          unoptimized
          loader={() => src}
          src={
            selectedModal && fileUrl
              ? fileUrl
              : "/assets/modal/appearanceShoeImage.svg"
          }
          width={370}
          height={405}
          className="rounded-r-[30px]"
        />
        {/*close icon */}
        <div className="absolute top-[30px] right-[30px]">
          <Image src="/assets/banner/close.png" width={42} height={42} />
        </div>
      </div>
    </div>
  );
}

export default SignUpShoeModal;

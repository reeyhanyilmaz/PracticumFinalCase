import React from "react";
import Image from "next/image";
import ModalInput from "../../../components/ModalInput";
import ModalButton from "../../../components/ModalButton";

//redux
import {
  useFileImage,
  useSelectedColor,
  useSelectedModal,
  useSelectedModalSize,
} from "../../../redux/modalSlice";

function SignUpShoeModal() {
  const fileImage = useFileImage();
  const size = useSelectedModalSize();
  const color = useSelectedColor();

  //for image loader
  const src = fileImage;
  const selectedModal = useSelectedModal();
  console.log("selectedModal :>> ", selectedModal);
  return (
    <div className="flex flex-row font-['Poppins']">
      {/* left part */}
      <div className="flex flex-col justify-center items-center ">
        <p
          className={`font-semibold`}
          style={{
            fontSize: size === 1 ? "20px" : size === 2 ? "30px" : "35px",
          }}
          // className="text-[30px] font-semibold"
        >
          Sign Up
        </p>
        <p
          className="mt-[10px] text-[16px]"
          style={{
            fontSize: size === 1 ? "13px" : size === 2 ? "16px" : "22px",
          }}
        >
          Join new adventure
        </p>
        <div className="grid grid-cols gap-[15px] mt-[30px]">
          <ModalInput
            placeholder="Enter full name"
            height={44}
            width={size * 150}
            pl={12}
            size={14}
          />
          <ModalInput
            placeholder="Enter your mail"
            height={44}
            width={size * 150}
            pl={12}
            size={14}
          />
          <ModalButton
            title="Sign Up"
            width={size * 150}
            height={44}
            border={color === "#FFFFFF" ? "1px solid #D2DAE3" : "none"}
            bg={selectedModal === 4 && color ? color : "#F37C34"}
            color={color === "#FFFFFF" ? "#000000" : "#fff"}
            size={14}
            weight={600}
          />
        </div>
        <p
          className="mt-[15px] text-[#777777] text-[10px] "
          style={{
            fontSize: size === 1 ? "8px" : size === 2 ? "10px" : "15px",
          }}
        >
          By signing up, you agree to Privacy Policy
        </p>
      </div>

      {/* right part (shoes image) */}
      <div className="part2 relative ">
        <Image
          unoptimized
          loader={() => src}
          src={
            selectedModal && fileImage
              ? fileImage
              : "/assets/modal/appearanceShoeImage.svg"
          }
          width={size * 195}
          height={size * 208}
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

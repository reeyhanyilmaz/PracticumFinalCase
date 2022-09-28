import React from "react";
import ModalButton from "../../../components/ModalButton";
import ModalCloseButton from "../../../components/ModalCloseButton";
import Image from "next/image";

function InstallLocalNowModal() {
  return (
    <div className="generalModalStyle flex-col w-[480px] h-[600px] font-[Inter]">
      <ModalCloseButton />
      <Image src="/installLocalNowModalImage.svg" width={480} height={300} />
      <div className="generalPosition flex-col w-[480px] h-[300px]">
        <p className="w-[236px] h-[36px] mb-[20px] font-bold text-2xl">
          Install Local Now
        </p>
        <p className="mb-[20px] text-xl font-normal">
          We’ve gone native, try it!
        </p>
        <div className="grid gap-[14.5px]">
          <ModalButton
            title="Continue"
            width={350}
            border="none"
            color="#fff"
            bg="#7D4AEA"
          />
          <ModalButton
            title="Not Now"
            width={350}
            border="1px solid #D2DAE3"
            bg="#fff"
          />
        </div>
      </div>
    </div>
  );
}

export default InstallLocalNowModal;

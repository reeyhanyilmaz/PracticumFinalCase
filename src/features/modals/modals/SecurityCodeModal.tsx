import React from "react";
import ModalCloseButton from "../../../components/ModalCloseButton";
import Image from "next/image";
import ModalInput from "../../../components/ModalInput";
import ModalButton from "../../../components/ModalButton";

function SecurityCodeModal() {
  return (
    <div className="generalModalStyle flex-col w-[480px] h-[446px] font-[Inter]">
      <ModalCloseButton />
      <div className="generalPosition bg-purple mb-[29px] h-[90px] w-[90px] rounded-[50%]">
        <Image src="/assets/modal/securityCodeLogoContent.svg" width={36} height={44} />
      </div>
      <p className="w-[209px] h-[36px] mb-[20px] font-bold text-2xl ">
        Security Code
      </p>
      <p className="mb-[41.5px] text-xl font-normal">
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
          border="none"
          bg="#7D4AEA"
          color="#fff"
        />
      </div>
    </div>
  );
}

export default SecurityCodeModal;

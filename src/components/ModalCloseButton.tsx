import React from "react";
import Image from "next/image";

function ModalCloseButton() {
  return (
    <div className="absolute top-[23px] right-[23px] z-[1]">
      <Image src="/assets/modal/modalCloseBtn.svg" width={30} height={30} />
    </div>
  );
}

export default ModalCloseButton;

import React from "react";
import Header from "./ModalPartHeader";
import ModalPart1 from "./ModalPart1";
import ModalPart2 from "./ModalPart2";

function Modal() {
  return (
    <div className="generalPosition flex-col">
      <Header />
      <ModalPart1 />
      <ModalPart2 />
    </div>
  );
}

export default Modal;

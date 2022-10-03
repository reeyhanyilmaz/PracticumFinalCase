import React from "react";
import ChooseTemplate from "./ChooseTemplate";
import Appearance from "./Appearance";
import ModalSectionHeader from "./ModalSectionHeader";

function Body() {
  return (
    <div className="generalPosition flex-col">
      <ModalSectionHeader />
      <ChooseTemplate />
      <Appearance />
    </div>
  );
}

export default Body;

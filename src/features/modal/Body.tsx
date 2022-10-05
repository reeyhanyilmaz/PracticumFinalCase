import React from "react";
import ChooseTemplate from "./ChooseTemplate";
import Appearance from "./Appearance";
import ModalSectionHeader from "./ModalSectionHeader";
import Content from "./Content";

function Body() {
  return (
    <div className="generalPosition flex-col">
      <ModalSectionHeader />
      <ChooseTemplate />
      <Appearance />
      <Content />
    </div>
  );
}

export default Body;

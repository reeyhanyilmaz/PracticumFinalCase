import React from "react";
import SectionTitle from "../../components/SectionTitle";
import UploadButtonPart from "../../components/UploadLogoPart";

function Content() {
  return (
    <div className="modalPart1Div justify-center w-[1194px] mt-[90px]">
      <SectionTitle no="3" title="Content" extra="" />
      <p className="mt-[30px]">Edit your content</p>
      <p className="mt-[30px]">Upload image</p>
      <div className="generalPosition flex-col UploadLogoBorder mt-[15px] mb-[90px]">
          <UploadButtonPart />
        </div>
    </div>
  );
}

export default Content;

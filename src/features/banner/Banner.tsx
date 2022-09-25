import React from "react";
import BannerBluePart from "./BannerBluePart";
import BannerGrayPart from "./BannerGrayPart";

function Banner() {
  return (
    <div className="flex flex-col justify-center items-center">
      <BannerBluePart />
      <BannerGrayPart />
    </div>
  );
}

export default Banner;

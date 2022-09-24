import React from "react";
import BannerBluePart from "./BannerBluePart";
import BannerGrayPart from "./BannerGrayPart";
import Image from "next/image";

function Banner() {
  return (
    <div className="flex flex flex-col justify-center items-center">
      <BannerBluePart />
      <div className="bannerImageDiv">
        <Image src="/bannerImage.svg" width={800} height={468} />
      </div>
      <BannerGrayPart />
    </div>
  );
}

export default Banner;

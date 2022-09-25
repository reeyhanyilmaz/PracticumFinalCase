import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import BannerImagePart from "./BannerImagePart";

function BannerBluePart() {
  return (
    <div className="bannerBluePart flex justify-center w-[1680px] }">
      <div
        className="relative w-[1194px] h-[910px]"
        style={{ border: "1px solid darkgreen" }}
      >
        <Navbar />

        <div className="headerDiv">Simple modal card creator</div>

        <div className="textDiv">
          A utility-first CSS framework packed with classeslike flex, pt-4,
          text-center and rotate-90 that can becomposed to build any design,
          directly in your markup
        </div>

        <div>
          <button>BUTTON</button>
        </div>

        <div className="mb-[90px] flex flex-row mt-10">
          <span className="flex flex-row ">
            <Image src="/check.svg" width={16} height={16} />
            <p className="ml-3 mr-7">Free and paid plans </p>
          </span>
          <span className="flex flex-row">
            <Image src="/check.svg" width={16} height={16} />
            <p className="ml-3 mr-7">Setup in minutes </p>
          </span>
          <span className="flex flex-row">
            <Image src="/check.svg" width={16} height={16} />
            <p className="ml-3 mr-7">No credit card required*</p>
          </span>
        </div>
        <div className="bannerImageShadow absolute rounded-t-[40px] top-[595px] right-[310px] w-[500px] h-[315px]"></div>
        <BannerImagePart />
      </div>
    </div>
  );
}

export default BannerBluePart;

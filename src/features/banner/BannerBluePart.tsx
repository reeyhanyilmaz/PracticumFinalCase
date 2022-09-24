import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

function BannerBluePart() {
  return (
    <div className="bannerBluePart">
      <Navbar />

      <div className="headerDiv">Simple modal card creator</div>

      <div className="textDiv">
        A utility-first CSS framework packed with classeslike flex, pt-4,
        text-center and rotate-90 that can becomposed to build any design,
        directly in your markup
      </div>

      <div>
        <button>Button</button>
      </div>

      <div className="checkDiv flex flex-row mt-10">
        <span className="flex flex-row ">
          <Image src="/check.svg" width={16} height={16}  />
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
    </div>
  );
}

export default BannerBluePart;

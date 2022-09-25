import React from "react";
import Image from "next/image";

function BannerImagePart() {
  return (
    <div className="bannerImageDiv flex flex-row absolute w-[800px] h-[468px] top-[683px] rounded-[40px] bg-[#ffffff] mb-[120px]">
      {/* left part */}
      <div className="part1 flex flex-col w-[400px] justify-center items-center">
        {/* camper image */}
        <Image src="/camper.svg" width={106} height={38} />
        <p className="p1">Join the club</p>
        <p className="p2">
          Subscribe and Get an Extra
          <strong className="font-medium underline"> 25% Off</strong> on your
          first purchase.
        </p>
        <input type="text" placeholder="Email address" className="input" />
        <button className="btn">Subscribe</button>
        <p className="p3">
          By signing up, you agree to{" "}
          <a href="# " className="underline">
            Privacy Policy{" "}
          </a>
          and{" "}
          <a href="#" className="underline">
            {" "}
            Terms of Use.
          </a>
        </p>
      </div>

      {/* right part / shoes image */}
      <div className="part2 relative ">
        <Image
          src="/shoes.png"
          width={400}
          height={468}
          className="rounded-r-[40px]"
        />
        {/*close icon */}
        <div className="absolute top-[30px] right-[30px]">
          <Image src="/close.png" width={42} height={42} />
        </div>
        <p className="p4 absolute w-[260px] h-[80px] bottom-[36px] left-[36px]">
          Mediterranean Sneakers®
        </p>
      </div>
    </div>
  );
}

export default BannerImagePart;

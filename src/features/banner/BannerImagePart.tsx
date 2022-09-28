import React from "react";
import Image from "next/image";

function BannerImagePart() {
  return (
    <div className="bannerImageDiv flex flex-row absolute w-[800px] h-[468px] top-[683px] rounded-[40px] bg-[#ffffff] mb-[120px]">
      {/* left part */}
      <div className="part1 flex flex-col w-[400px] justify-center items-center">
        <Image src="/assets/banner/camper.svg" width={106} height={38} />{/* camper image */}
        <p className="p1">Join the club</p>
        <p className="p2 mb-[30px] w-[267px] h-[48px]">
          Subscribe and Get an Extra
          <strong className="font-medium underline"> 25% Off</strong> on your
          first purchase.
        </p>
        <input type="text" placeholder="Email address" className="input mb-[15px] pl-[15px]" />
        <button className="btn bg-[#000] text-[#fff] mb-[20px]">Subscribe</button>
        <p className="p3 w-[250px] h-[36px]">By signing up, you agree to <a href="# " className="underline"> Privacy Policy </a> and <a href="#" className="underline"> Terms of Use.</a>
        </p>
      </div>

      {/* right part (shoes image) */}
      <div className="part2 relative ">
        <Image
          src="/assets/banner/shoes.png"
          width={400}
          height={468}
          className="rounded-r-[40px]"
        />
        {/*close icon */}
        <div className="absolute top-[30px] right-[30px]">
          <Image src="/assets/banner/close.png" width={42} height={42} />
        </div>
        <p className="p4 absolute w-[260px] h-[80px] bottom-[36px] left-[36px]">
          Mediterranean Sneakers®
        </p>

        {/* resim üzerindeki 2 white sutun */}
        <div className="absolute bg-[#fff] right-[-120px] top-[100px] mb-[10px] w-[182px] h-[48px] rounded-[12px] flex flex-row justify-center items-center">
          <Image src="/assets/banner/light.svg" width={20} height={20} />
          <p className="lightAndDolorText ml-[12px]">Grow email list</p>
        </div>

        <div className="absolute bg-[#fff] right-[-185px] top-[160px] w-[269px] h-[48px] rounded-[12px] flex flex-row justify-center items-center">
          <Image src="/assets/banner/dolor.svg" width={20} height={20} />
          <p className="lightAndDolorText ml-[12px]">Increase sales conversion</p>
        </div>
      </div>
    </div>
  );
}

export default BannerImagePart;

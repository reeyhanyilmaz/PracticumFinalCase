import React from "react";

function BannerGrayPart() {
  return (
    <div className="bannerGrayPart flex justify-center  h-[630px] w-[1680px] bg-[#666666]">
      <div className="text-white flex flex-row w-[1194px] mt-[361px] mb-[130px]">
        <span className="grayText1 mr-[159px]">
          <p className="p1 mb-[15px]">3x</p>
          <p className="p2 w-[119px]">Increase Conversion Rate</p>
        </span>

        <span className="grayText2 mr-[120px]">
          <p className="p1 mb-[15px]">120%</p>
          <p className="p2 w-[87px]">Email Subscribers</p>
        </span>

        <span className="grayText3 mr-[120px]">
          <p className="p1 mb-[15px]">390%</p>
          <p className="p2 w-[113px]">More Customer Engagement</p>
        </span>

        <p className="grayText4">Popupsmart meets all your business needs.</p>
      </div>
    </div>
  );
}

export default BannerGrayPart;

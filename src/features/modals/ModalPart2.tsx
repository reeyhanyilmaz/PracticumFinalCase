import React, { useState } from "react";
import Image from "next/image";

function ModalPart2() {
  const [isClick, setIsClick] = useState<boolean>(false);

  return (
    <div className="modalPart1Div flex flex-row justify-center w-[1194px] mt-[90px] ">
      {/* left part **************************************************************/}
      <div>
        <div className="flex flex-row mb-[30px]">
          <p className="p1">2</p>
          <p className="p2">Appearance</p>
          <p className="flex justify-center items-center ml-[3px]">
            (Size, colors, logo)
          </p>
        </div>
        <p className="text-sm font-[Inter] font-normal">Size</p>

        {/* smal-mediuml-large option */}
        <div className="flex justify-around items-center flex-row mt-[30px] mb-[67px] w-[257px] h-[48px] bg-[#f5f5f5] rounded-[12px]">
          <button
            onClick={() => setIsClick(!isClick)}
            className={
              isClick === true
                ? "w-[95px] h-[42px] bg-[#fff] rounded-[10px]"
                : "w-[95px] h-[42px] text-[#777777]"
            }
          >
            Small
          </button>
          <button
            onClick={() => setIsClick(!isClick)}
            className={
              isClick === true
                ? "w-[95px] h-[42px] bg-[#fff] rounded-[10px]"
                : "w-[95px] h-[42px] text-[#777777]"
            }
          >
            Medium
          </button>
          <button
            onClick={() => setIsClick(!isClick)}
            className={
              isClick === true
                ? "w-[95px] h-[42px] bg-[#fff] rounded-[10px]"
                : "w-[95px] h-[42px] text-[#777777]"
            }
          >
            Large
          </button>
        </div>

        {/* position */}
        <p className="text-sm font-[Inter] font-normal">Position</p>
        <div className="mt-[15px]">positionlar gelecek</div>

        {/* colors */}
        <p className="mt-[30px] text-sm font-[Inter] font-normal ">Colors</p>
        <div className="flex mt-[15px] grid grid-cols-5 gap-[10px] w-[250px]">
          <div className="colorsCardStyles bg-[#000000]"></div>
          <div className="colorsCardStyles bg-[#F37C34]"></div>
          <div className="colorsCardStyles bg-[#777777]"></div>
          <div className="colorsCardStyles bg-[#DDDDDD]"></div>
          <div className="colorsCardStyles bg-[#FFFFFF;]"></div>
        </div>
        {/* upload logo */}
        <p className="mt-[30px] text-sm font-[Inter] font-normal">
          Upload Logo
        </p>
        <div className="generalPosition flex-col UploadLogoBorder mt-[15px] mb-[90px]">
          <div className="generalPosition bg-[#7D4AEA] opacity-[0.1] rounded-[12px] w-[80px] h-[80px] mt-[30px]">
            <Image src="/assets/modal/uploadLogoIn.svg" width={27} height={27} />
          </div>
          <div className="flex flex-row mt-[20px]">
            <Image src="/assets/modal/uploadIcon.svg" width={18} height={12} />
            <p className="font-normal text-[14px] font-[Inter] ml-[5px]">
              Drop your image here or{" "}
              <button className="underline text-[#7D4AEA]">upload</button>
            </p>
          </div>
        </div>
      </div>

      {/* right part  *************************************************************/}
      <div className="w-[740px] h-[405px] rounded-[30px] shadow-[0px 5px 30px rgba(0, 0, 0, 0.15)]  bg-[red]">
      
      </div>
    </div>
  );
}

export default ModalPart2;

import React, { useState } from "react";
import Image from "next/image";

function ModalPart1() {
  const [isClick, setIsClick] = useState<boolean>(false);

  return (
    <div className="modalPart1Div justify-center w-[1194px] mt-[90px]">
      <div className="flex flex-row ">
        <p className="p1">1</p>
        <p className="p2">Choose your template</p>
      </div>

      {/* modals grid part */}
      <div className="mt-[30px] grid grid-cols-4 gap-[30px]">
        <div className="modalGridStyles generalPosition">
          <Image src="/assets/modal/modal1.svg" width={170} height={156} />
        </div>

        <div className="modalGridStyles generalPosition">
          <Image src="/assets/modal/modal2.svg" width={136} height={170} />
        </div>

        <div className="modalGridStyles generalPosition">
          <Image src="/assets/modal/modal3.svg" width={148} height={170} />
        </div>

        <div className="modalGridStyles generalPosition">deneme 4</div>

        <div className="modalGridStyles generalPosition">deneme 5</div>

        <div className="modalGridStyles generalPosition">deneme 6</div>

        <div className="modalGridStyles generalPosition">deneme 7 </div>

        <div className="modalGridStyles generalPosition">deneme 8</div>

        <div className="modalGridStyles generalPosition">deneme 9</div>

        <div className="modalGridStyles generalPosition">deneme 10</div>

        <div className="modalGridStyles generalPosition">deneme 11</div>

        <div className="modalGridStyles generalPosition">deneme 12</div>
      </div>

      {/* page part */}
      <div className="flex justify-around items-center flex-row mt-[30px] mb-[67px] w-[132px] h-[48px] bg-[#f5f5f5] rounded-[12px]">
        <button
          onClick={() => setIsClick(!isClick)}
          className={
            isClick === true
              ? "w-[42px] h-[42px] bg-[#fff] rounded-[10px]"
              : "w-[42px] h-[42px] text-[#777777]"
          }
        >
          1
        </button>
        <button
          onClick={() => setIsClick(!isClick)}
          className={
            isClick === true
              ? "w-[42px] h-[42px] bg-[#fff] rounded-[10px]"
              : "w-[42px] h-[42px] text-[#777777]"
          }
        >
          2
        </button>
        <button
          onClick={() => setIsClick(!isClick)}
          className={
            isClick === true
              ? "w-[42px] h-[42px] bg-[#fff] rounded-[10px]"
              : "w-[42px] h-[42px] text-[#777777]"
          }
        >
          3
        </button>
      </div>
    </div>
  );
}

export default ModalPart1;

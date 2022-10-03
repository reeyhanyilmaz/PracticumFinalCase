import React, { useEffect, useState } from "react";

//redux
import {
  useSelectedModal,
  setSelectedModalSize,
  useSelectedModalSize,
  setSelectedColor,
  useSelectedPosition,
  setSelectedPosition,
} from "../../redux/modalSlice";

//modals
import SecurityCodeModal from "./modals/SecurityCodeModal";
import InstallLocalNowModal from "./modals/InstallLocalNowModal";
import SignUpShoeModal from "./modals/SignUpShoeModal";

import SectionTitle from "../../components/SectionTitle";

//upload button
import UploadButtonPart from "../../components/UploadButtonPart";
import { useAppDispatch } from "../../redux/hooks";

//data
import { sizeButtonData, colors, positions } from "../../data/modal";

//type
import { ISizeButtonData } from "../../types/modal";

function ModalPart2() {
  // const [isClick, setIsClick] = useState<boolean>(false);
  //redux
  const dispatch = useAppDispatch();
  const selectedModal = useSelectedModal();
  const selectedModalSize = useSelectedModalSize();
  const selectedPosition = useSelectedPosition();
  const position = useSelectedPosition();
  const [pos, setPos] = useState("");

  const handleModalPosition = (position: number) => {
    switch (position) {
      case 1:
        setPos("absolute top-0 left-0");
        break;
      case 2:
        setPos("absolute top-0 left-[50%] -translate-x-1/2");
        break;
      case 3:
        setPos("absolute top-0 right-0");
        break;
      case 4:
        setPos("absolute left-0 top-[50%] -translate-y-1/2");
        break;
      case 5:
        setPos(
          "absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2"
        );
        break;
      case 6:
        setPos("absolute right-0 top-[50%] -translate-y-1/2");
        break;
      case 7:
        setPos("absolute bottom-0 left-0");
        break;
      case 8:
        setPos("absolute bottom-0 left-[50%] -translate-x-1/2");
        break;
      case 9:
        setPos("absolute bottom-0 right-0");
        break;
      // default: setPos("absolute top-0 translate-x-1/2");
      //   break;
    }
  };

  useEffect(() => {
    handleModalPosition(position);
  }, [position]);

  const handleSelectedModal = (number: number) => {
    switch (number) {
      case 1:
        return <SecurityCodeModal />;
      case 2:
        return <InstallLocalNowModal />;
      default:
        return <SignUpShoeModal />;
    }
  };

  return (
    <div className="modalPart1Div flex flex-row justify-between w-[1194px] mt-[90px]">
      {/* left part **************************************************************/}
      <div className="h-[auto]">
        <SectionTitle no="2" title="Appearance" extra="Size, colors, logo" />
        <p className="text-sm font-[Inter] font-normal mt-[30px]">Size</p>

        {/* small-medium-large option */}
        <div className="flex justify-around items-center flex-row mt-[30px] mb-[67px] w-[257px] h-[48px] bg-[#f5f5f5] rounded-[12px]">
          {sizeButtonData.map((item: ISizeButtonData) => (
            <div key={item.id}>
              <button
                onClick={() => dispatch(setSelectedModalSize(item.id))}
                className={
                  selectedModalSize === item.id
                    ? "w-[95px] h-[42px] bg-[#fff] rounded-[10px]"
                    : "w-[95px] h-[42px] text-[#777777]"
                }
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>

        {/* position */}
        <p className="text-sm font-[Inter] font-normal">Position</p>
        <div className=" relative mt-[15px] grid grid-cols-3 gap-[5px] w-[82px] h-[55px]">
          {positions.map((position) => (
            <button
              onClick={() => dispatch(setSelectedPosition(position.id))}
              className={`border-solid border border-inherit w-[24px] h-[15px] ${
                position.style
              } ${selectedPosition === position.id ? "bg-primaryColor" : ""}`}
            />
          ))}
        </div>

        {/* colors */}
        <p className="mt-[30px] text-sm font-[Inter] font-normal ">Colors</p>
        <div className="flex mt-[15px] grid grid-cols-5 gap-[10px] w-[250px]">
          {colors.map((color, i) => (
            <button
              onClick={() => dispatch(setSelectedColor(color))}
              key={i}
              className={`colorsCardStyles bg-[${color}]`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* upload logo */}
        <p className="mt-[30px] text-sm font-[Inter] font-normal">
          Upload Logo
        </p>
        <div className="generalPosition flex-col UploadLogoBorder mt-[15px] mb-[90px]">
          <UploadButtonPart />
        </div>
      </div>

      {/* right part  *************************************************************/}
      <div className="relative flex-1 bg-[green]">
        <div
          className={`rounded-[30px] shadow-[0_5px_30px_rgba(0,0,0,0.15)] ${pos}`}
        >
          {handleSelectedModal(selectedModal)}
        </div>
      </div>
    </div>
  );
}

export default ModalPart2;

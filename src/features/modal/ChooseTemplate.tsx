import React, { useState } from "react";
import Image from "next/image";

//redux
import { setSelectedModal, useSelectedModal } from "../../redux/modalSlice";
import { useAppDispatch } from "../../redux/hooks";

//data
import { ModalGridCardsData as modals } from "../../data/modal";

//types
import { IModalGridCard } from "../../types/modal";

import SectionTitle from "../../components/SectionTitle";

function ChooseTemplate() {
  const [isClick, setIsClick] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const selectedModal = useSelectedModal();
  console.log({ selectedModal });

  return (
    <div className="modalPart1Div justify-center w-[1194px] mt-[90px]">
      <SectionTitle no="1" title="Choose your template" extra="" />
      {/* modals grid part */}
      <div className="mt-[30px] grid grid-cols-4 gap-[30px]">
        {modals.map((modal: IModalGridCard) => (
          <div
            className={
              selectedModal === modal.id
                ? "modalGridSelectedStyles generalPosition "
                : "modalGridStyles generalPosition hover:modalHover"
            }
            onClick={() => dispatch(setSelectedModal(modal.id))}
            key={modal.id}
          >
            <Image
              src={modal.image.url}
              width={modal.image.width}
              height={modal.image.height}
            />
          </div>
        ))}
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

export default ChooseTemplate;

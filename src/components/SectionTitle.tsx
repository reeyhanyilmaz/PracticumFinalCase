import React from "react";

interface IProps {
  no: string;
  title: string;
  extra?: string;
}

function SectionTitle(props: IProps) {
  const { no, title, extra } = props;
  return (
    <div className="flex flex-row ">
      <p className="p1">{no}</p>
      <p className="p2">{title}</p>
      {extra !== "" && (
        <p className="flex justify-center items-center ml-[5px]">
          {`(${extra})`}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;

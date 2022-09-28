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
      {extra !== "" && <div className="ml-[0.3rem]">{`(${extra})`}</div>}
    </div>
  );
}

export default SectionTitle;

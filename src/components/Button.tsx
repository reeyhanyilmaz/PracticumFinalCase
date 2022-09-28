import React from "react";

interface IButtonProps {
  title: string;
  type: string;
  color: string;
  bg?: string;
  px?: number;
  py?: number;
  mx?: number;
  my?: number;
  br?: string;
}

function Button(props: IButtonProps) {
  const btnStyle = {
    color: props.color,
    backgroundColor: props.bg || "#fff",
    border: props.type === "full" ? `1px solid ${props.bg}` : "none",
    paddingInline: props.px || "10px",
    paddingBlock: props.py || "10px",
    marginInline: props.mx || "0px",
    marginBlock: props.my || "0px",
    borderRadius: props.br || "12px",
  };

  return <button style={btnStyle}>{props.title}</button>;
}

export default Button;

import React from "react";
import { IInput } from "../types/modal";

function ModalInput(props: IInput) {
  const inputStyle = {
    height: props.height,
    width: props.width,
    paddingLeft: props.pl,
    fontSize: props.size,
  };
  
  return (
    <div>
      <input
        style={inputStyle}
        type="text"
        placeholder={props.placeholder}
        className="modalInputProperties"
      />
    </div>
  );
}

export default ModalInput;

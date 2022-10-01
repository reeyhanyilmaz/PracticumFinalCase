import React from "react";
import { IButton } from "../types/modal";

function ModalButton(props: IButton) {
  const btnStyle = {
    border: props.border,
    backgroundColor: props.bg,
    color: props.color,
    width: props.width,
    height: props.height,
    fontSize: props.size,
    fontWeight: props.weight,
  };

  return (
    <div>
      <button style={btnStyle} className="modalButtonProperties">
        {props.title}
      </button>
    </div>
  );
}

export default ModalButton;

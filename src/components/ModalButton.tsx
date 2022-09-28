import React from 'react';

interface IButton {
    title: string;
    className?: any;
    width: number;
    border: string;
    bg: string;
    color?: string;
}

function ModalButton(props: IButton) {
    const btnStyle = {
        border: props.border,
        backgroundColor: props.bg,
        color: props.color,
        width: props.width,
    }
  return (
    <div>
        <button style={btnStyle} className='modalButtonProperties'>{props.title}</button>
    </div>
  )
}

export default ModalButton;

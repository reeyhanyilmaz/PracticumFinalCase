import React from 'react';

interface IButton {
    title: string;
    className?: any;
    width: number;
    border: string;
    bg: string;
    color?: string;
    height?: number;
    size?:number;
    weight?:number;

}

function ModalButton(props: IButton) {
    const btnStyle = {
        border: props.border,
        backgroundColor: props.bg,
        color: props.color,
        width: props.width,
        height: props.height,
        fontSize: props.size,
        fontWeight: props.weight,

    }
  return (
    <div>
        <button style={btnStyle} className='modalButtonProperties'>{props.title}</button>
    </div>
  )
}

export default ModalButton;

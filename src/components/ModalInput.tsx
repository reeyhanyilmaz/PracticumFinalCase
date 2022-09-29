import React from 'react';

interface IInput{
placeholder: string;
height?: number;
width?: number;
pl?:number;
size?: number;
}


function ModalInput(props: IInput) {
  const inputStyle = {
    height: props.height,
    width: props.width,
    paddingLeft: props.pl,
    fontSize: props.size,
}
  return (
    <div>
      <input style={inputStyle} type="text" placeholder={props.placeholder} className="modalInputProperties"/>
    </div>
  )
}

export default ModalInput;
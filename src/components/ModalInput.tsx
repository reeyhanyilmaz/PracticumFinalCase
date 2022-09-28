import React from 'react';

interface IInput{
placeholder: string;
}


function ModalInput(props: IInput) {
  return (
    <div>
      <input type="text" placeholder={props.placeholder} className="modalInputProperties"/>
    </div>
  )
}

export default ModalInput;
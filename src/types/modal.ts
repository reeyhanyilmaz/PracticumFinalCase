//for modal data
export interface IModalGridCard {
    id: number;
    name: string;
    image: { url: string; height: number; width: number };
}

//for modal size button
export interface ISizeButtonData {
    id:number,
    name:string,
    width: number | string,
    height: number | string,
}

//for slice
export interface IModalState {
    selectedModal: number,
    fileUrl: string,
    loading: boolean,
    selectedModalSize: number,
    selectedColor: string,
    selectedPosition:number,
}

//for modal button
export interface IButton {
    title: string;
    className?: any;
    width: number;
    border: string;
    bg: string;
    color?: string;
    height?: number;
    size?: number;
    weight?: number;
}


//for modal input 
export interface IInput {
    placeholder: string;
    height?: number;
    width?: number;
    pl?: number;
    size?: number;
}

//for section titles (1...,2...,3....)
export interface IProps {
    no: string;
    title: string;
    extra?: string;
}

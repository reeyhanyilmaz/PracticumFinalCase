import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store';
import { useAppSelector } from './hooks';
import { IModalState } from '../types/modal';

const initialState: IModalState = {
    selectedModal: 1,
    selectedModalSize: 2,
    selectedPosition: 2,
    selectedColor: "#7D4AEA",
    fileLogo: "",
    fileImage: "",  
    loading: false,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setSelectedModal: (state, action: PayloadAction<number>) => {
            state.selectedModal = action.payload;
        },
        setSelectedModalSize: (state, action: PayloadAction<number>) => {
            state.selectedModalSize = action.payload;
        },
        setFileLogo: (state, action: PayloadAction<string>) => {
            state.fileLogo = action.payload;
            console.log('action.payload', action.payload)
        },
        setFileImage: (state, action: PayloadAction<string>) => {
            state.fileImage = action.payload;
            console.log('action.payload', action.payload)
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setSelectedColor: (state, action: PayloadAction<string>) => {
            state.selectedColor = action.payload;
        },
        setSelectedPosition: (state, action: PayloadAction<number>) => {
            state.selectedPosition = action.payload;
        }
    },
})

// Reducers
export const { setSelectedModal, setSelectedModalSize, setFileLogo, setFileImage, setLoading, setSelectedColor , setSelectedPosition } = modalSlice.actions

// Custom Hooks
export const useSelectedModal = () => useAppSelector((s: RootState) => s.modal.selectedModal);
export const useSelectedModalSize = () => useAppSelector((s: RootState) => s.modal.selectedModalSize);
export const useSelectedColor = () => useAppSelector((s: RootState) => s.modal.selectedColor);
export const useFileLogo = () => useAppSelector((s: RootState) => s.modal.fileLogo);
export const useFileImage = () => useAppSelector((s: RootState) => s.modal.fileImage);
export const useLoading = () => useAppSelector((s: RootState) => s.modal.loading);
export const useSelectedPosition = () => useAppSelector((s: RootState) => s.modal.selectedPosition);

// ModalReducer
export default modalSlice.reducer;
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store';
import { useAppSelector } from './hooks';
import {IModalState } from '../types/modal';

const initialState: IModalState = {
    selectedModal: 0,
    fileUrl: "",
    loading: false,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setSelectedModal: (state, action: PayloadAction<number>) => {
            state.selectedModal = action.payload;       
        },
        setFileUrl: (state, action: PayloadAction<string>) => {
            state.fileUrl = action.payload;
            console.log('action.payload', action.payload)
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        }
    },
})

// Reducers
export const { setSelectedModal, setFileUrl, setLoading } = modalSlice.actions

// Custom Hooks
export const useSelectedModal = () => useAppSelector((s: RootState) => s.modal.selectedModal);
export const useFileUrl = () => useAppSelector((s: RootState) => s.modal.fileUrl);
export const useLoading = () => useAppSelector((s:RootState) => s.modal.loading);

// ModalReducer
export default modalSlice.reducer
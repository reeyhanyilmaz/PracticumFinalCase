import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { useAppSelector } from './hooks'

interface ModalState {
    selectedModal: number
}

const initialState: ModalState = {
    selectedModal: 0,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setSelectedModal: (state, action: PayloadAction<number>) => {
            state.selectedModal = action.payload
        },
    },
})

// Reducers
export const { setSelectedModal } = modalSlice.actions

// Custom Hooks
export const useSelectedModal = () => useAppSelector((s: RootState) => s.modal.selectedModal);

// ModalReducer
export default modalSlice.reducer
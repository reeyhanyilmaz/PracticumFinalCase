import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface ModalState {
  selectedModal: number
}

// Define the initial state using that type
const initialState: ModalState = {
    selectedModal: 0,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setSelectedModal: (state,action) => {
      state.selectedModal = action.payload
    },
  },
})

export const { setSelectedModal } = modalSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectSelectedModal = (s: RootState) => s.modal.selectedModal;

export default modalSlice.reducer
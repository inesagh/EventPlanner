import {createSlice} from '@reduxjs/toolkit';
import ModalsEnum from "../enums/modal.enums";

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalId: ModalsEnum.CLOSE,
  },
  reducers: {
    openModal: (state, action) => {
      state.modalId = action.payload;
    },
  },
});

export const {openModal} = modalSlice.actions;

export default modalSlice.reducer;
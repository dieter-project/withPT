// modalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isOverlap: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: state => {
      state.isOpen = true;
    },
    closeModal: state => {
      state.isOpen = false;
    },
    setOverlap: (state, action) => {
      state.isOverlap = action.payload;
    },
    resetOverlap: state => {
      state.isOverlap = false;
    },
  },
});

export const { openModal, closeModal, setOverlap, resetOverlap } =
  modalSlice.actions;
export default modalSlice.reducer;

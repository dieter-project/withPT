import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  birth: {
    year: "",
    month: "",
    date: "",
  },
  sex: "",
};

const signupFormSlice = createSlice({
  name: "signupform",
  initialState,
  reducers: {
    updateFormField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    updateBirthField: (state, action) => {
      const { field, value } = action.payload;
      state.birth[field] = value;
    },
    resetForm: state => {
      state.name = "";
      state.birth = { year: "", month: "", date: "" };
      state.sex = "";
    },
  },
});

export const { updateFormField, updateBirthField, resetForm } =
  signupFormSlice.actions;
export default signupFormSlice.reducer;

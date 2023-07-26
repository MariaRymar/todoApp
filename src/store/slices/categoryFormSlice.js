import { createSlice } from "@reduxjs/toolkit";

const categoryFormSlice = createSlice({
  name: "categoryForm",
  initialState: {
    value: ""
  },
  reducers: {
    changeCategoryValue(state, action) {
      state.value = action.payload;
    },
    resetForm(state) {
      state.value = "";
    },
  }
  
});

export const { changeCategoryValue, resetForm } = categoryFormSlice.actions;
export const categoryFormReducer = categoryFormSlice.reducer;

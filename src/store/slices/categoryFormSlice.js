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
  },
  // extraReducers(builder) {
  //     builder.addCase(addCategory, (state, action) => {
  //         return {value: ''}
  //     })
  // }
});

export const { changeCategoryValue } = categoryFormSlice.actions;
export const categoryFormReducer = categoryFormSlice.reducer;

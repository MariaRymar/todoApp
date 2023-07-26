import { createSlice } from "@reduxjs/toolkit";
import { addTask } from "../thunks/addTask";

const formSlice = createSlice({
  name: "form",
  initialState: {
    value: "",
    detail: "",
    category: "",
    dueDate: null,
    date: ''
  },
  reducers: {
    changeValue(state, action) {
      state.value = action.payload;
    },
    changeDetail(state, action) {
      state.detail = action.payload;
    },
    changeDueDate(state, action) {
      state.date = action.payload
      state.dueDate = action.payload;
    },
    changeCategory(state, action) {
      state.category = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addTask.fulfilled, (state, action) => {
      state.value = "";
      state.detail = "";
      state.category = "";
      state.dueDate = null;
    });
  },
});

export const { changeValue, changeDetail, changeDueDate, changeCategory } =
  formSlice.actions;
export const formReducer = formSlice.reducer;

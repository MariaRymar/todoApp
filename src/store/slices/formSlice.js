import { createSlice } from "@reduxjs/toolkit";
import { addTask } from "../slices/tasksSlice";

const formSlice = createSlice({
  name: "form",
  initialState: {
    value: "",
    detail: "",
    category: "some categ",
    dueDate: "",
  },
  reducers: {
    changeValue(state, action) {
      state.value = action.payload;
    },
    changeDetail(state, action) {
      state.detail = action.payload;
    },
    changeDueDate(state, action) {
      state.dueDate = action.payload;
    },
    changeCategory(state, action) {
      state.category = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addTask, (state, action) => {
      state.value = "";
      state.detail = "";
      state.category = "some categ";
      state.dueDate = "";
    });
  },
});

export const { changeValue, changeDetail, changeDueDate, changeCategory } =
  formSlice.actions;
export const formReducer = formSlice.reducer;

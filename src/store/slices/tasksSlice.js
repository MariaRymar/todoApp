import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "../thunks/fetchTasks";
import { addTask } from "../thunks/addTask";
import { deleteTask } from "../thunks/deleteTask";
import { changeComplete } from "../thunks/changeComplete";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    isLoading: false,
    error: null,
    searchTerm: "",
    chosenCategory: "",
    taskList: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    changeChosenCategory(state, action) {
      state.chosenCategory = action.payload;
    },
  },
  extraReducers(buider) {
    buider.addCase(fetchTasks.pending, (state, action) => {
      state.isLoading = true;
    });
    buider.addCase(fetchTasks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.taskList = action.payload;
    });
    buider.addCase(fetchTasks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    buider.addCase(addTask.pending, (state, action) => {
      state.isLoading = true;
    });
    buider.addCase(addTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.taskList.push(action.payload);
    });
    buider.addCase(addTask.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    buider.addCase(deleteTask.pending, (state, action) => {
      state.isLoading = true;
    });
    buider.addCase(deleteTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.taskList = state.taskList.filter(
        (task) => task.id !== action.payload
      );
    });
    buider.addCase(deleteTask.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    buider.addCase(changeComplete.pending, (state, action) => {
      state.isLoading = true;
    });
    buider.addCase(changeComplete.fulfilled, (state, action) => {
      state.isLoading = false;
      state.taskList = state.taskList.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
    });
    buider.addCase(changeComplete.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const { changeSearchTerm, changeChosenCategory } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;

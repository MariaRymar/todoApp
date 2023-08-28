import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "../thunks/fetchTasks";
import { addTask } from "../thunks/addTask";
import { deleteTask } from "../thunks/deleteTask";
import { changeComplete } from "../thunks/changeComplete";
import { deleteTasksByCategory } from "../thunks/deleteTasksByCategory";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    isLoading: false,
    error: null,
    searchTerm: "",
    chosenCategory: "",
    taskList: [],
    res: 'rrr'
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    changeChosenCategory(state, action) {
      state.chosenCategory = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchTasks.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.taskList = action.payload;
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(addTask.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.taskList.push(action.payload);
    });
    builder.addCase(addTask.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(deleteTask.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.taskList = state.taskList.filter(
        (task) => task.id !== action.payload
      );
    });
    builder.addCase(deleteTask.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(changeComplete.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(changeComplete.fulfilled, (state, action) => {
      state.isLoading = false;
      state.taskList = state.taskList.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
    });
    builder.addCase(changeComplete.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    

  },
});

export const { changeSearchTerm, changeChosenCategory } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;

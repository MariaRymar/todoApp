import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteTasksByCategory = createAsyncThunk("tasks/deleteByCategory", async (category) => {
  await axios.delete(`http://localhost:3001/tasks?category=${category.id}`);
  
  return category;
});

export { deleteTasksByCategory };
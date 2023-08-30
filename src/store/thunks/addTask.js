import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addTask = createAsyncThunk("tasks/add", async (task) => {

  const response = await axios.post(
    // "http://localhost:3001/tasks"
    // "https://my-json-server.typicode.com/MariaRymar/db/tasks"
    "https://positive-subsequent-sandal.glitch.me/tasks"
    
    , {
    value: task.value,
    dueDate: task.dueDate,
    date: Date.parse(task.dueDate),
    completion: false,
    category: task.category,
    detail: task.detail,
  });
  return response.data;
});

export { addTask };
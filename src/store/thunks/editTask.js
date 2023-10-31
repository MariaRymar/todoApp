import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const editTask = createAsyncThunk("tasks/edit", async (task) => {
  
  const response = await axios.put(
    // `http://localhost:3001/tasks/${task.id}`
  // `https://my-json-server.typicode.com/MariaRymar/db/tasks/${task.id}`
  `https://positive-subsequent-sandal.glitch.me/tasks/${task.id}`
    
    , {
    ...task,
    value: task.value,
    detail: task.detail
  });
  return response.data;
});

export { editTask };
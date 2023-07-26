import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const changeComplete = createAsyncThunk("tasks/complete", async (task) => {
  
  const response = await axios.put(`http://localhost:3001/tasks/${task.id}`, {
    ...task,
    completion: !task.completion
  });
  return response.data;
});

export { changeComplete };

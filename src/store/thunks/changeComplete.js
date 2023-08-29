import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const changeComplete = createAsyncThunk("tasks/complete", async (task) => {
  
  const response = await axios.put(
    `http://localhost:3001/tasks/${task.id}`
  `https://my-json-server.typicode.com/MariaRymar/db/tasks/${task.id}`
    
    , {
    ...task,
    completion: !task.completion
  });
  return response.data;
});

export { changeComplete };

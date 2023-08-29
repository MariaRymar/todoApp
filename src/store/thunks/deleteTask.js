import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteTask = createAsyncThunk("tasks/delete", async (id) => {
  await axios.delete(
    // `http://localhost:3001/tasks/${id}`
    `https://my-json-server.typicode.com/MariaRymar/db/tasks/${id}`
    
    );
  return id;
});

export { deleteTask };
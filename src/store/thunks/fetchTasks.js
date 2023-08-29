import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const fetchTasks = createAsyncThunk("tasks/fetch", async () => {
  const response = await axios.get(
    "https://my-json-server.typicode.com/MariaRymar/db/tasks"
    );
  return response.data;
});

export { fetchTasks };

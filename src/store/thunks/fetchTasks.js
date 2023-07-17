import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
const fetchTasks = createAsyncThunk('tasks/fetch', async () => {
    const response = await axios.get('http://localhost:3001/tasks')
    return response.data

})

export { fetchTasks }
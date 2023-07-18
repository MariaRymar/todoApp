import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addTask = createAsyncThunk("tasks/add", async (task) => {
    // let day = task.dueDate.getDate();
    // let month = [
    //   "Jan",
    //   "Feb",
    //   "Mar",
    //   "Apr",
    //   "May",
    //   "Jun",
    //   "Jul",
    //   "Aug",
    //   "Sep",
    //   "Oct",
    //   "Nov",
    //   "Dec",
    // ][task.dueDate.getMonth()];
  const response = await axios.post("http://localhost:3001/tasks", {
    value: task.value,
    // dueDate: `${day} ${month}`,
    // date: Date.parse(task.dueDate),
    completion: false,
    category: task.category,
    detail: task.detail,
  
  });
  return response.data
});

export {addTask}

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteTasksByCategory = createAsyncThunk("tasks/deleteByCategory", async (category) => {});

export { deleteTasksByCategory };
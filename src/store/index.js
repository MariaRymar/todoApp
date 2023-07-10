import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer, addTask } from "./slices/tasksSlice";


const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    }
})



export { store, addTask }
import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        searchTerm: '',
        taskList: [{id: 123, name: "Homework"}, {id: 124, name: "Paper"}]
    },
    reducers: {
        addTask(state, action) {
            state.taskList.push({
                name: action.payload.name,
                id: nanoid()
            })
        }
    }
})

export const {addTask} = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
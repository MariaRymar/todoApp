import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        searchTerm: '',
        taskList: [{id: 123, value: "Homework", completion: true, dueDate: '11 Mar', detail: 'sdwefrgfds'}, {id: 124, value: "Paper", completion: false, dueDate: '12 Mar', detail: 'sdwefrgfds'}]
    },
    reducers: {
        addTask(state, action) {
            state.taskList.push({
                value: action.payload.value,
                dueDate: action.payload.dueDate,
                date: Date.parse(action.payload.dueDate),
                completion: false,
                category: action.payload.category,
                detail: action.payload.detail,
                id: nanoid()
            })
        },
        removeTask(state, action) {
           state.taskList = state.taskList.filter(task => task.id !== action.payload)
        }
    }
})

export const {addTask, removeTask} = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
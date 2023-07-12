import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        searchTerm: '',
        chosenCategory: '',
        taskList: [{id: 123, value: "Homework", completion: true, dueDate: '11 Mar', detail: 'sdwefrgfds', date: 1689199200001, category:"Home"}, {id: 124, value: "Paper", completion: false, dueDate: '12 Mar', detail: 'sdwefrgfds', date: 1689199200010, category: "Work"}]
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload

        },
        changeChosenCategory(state, action) {

            state.chosenCategory = action.payload
        },
        addTask(state, action) {
            let day = action.payload.dueDate.getDate();
            let month = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ][action.payload.dueDate.getMonth()];

            state.taskList.push({
                value: action.payload.value,
                dueDate: `${day} ${month}`,
                date: Date.parse(action.payload.dueDate),
                completion: false,
                category: action.payload.category,
                detail: action.payload.detail,
                id: nanoid()
            })
        },
        removeTask(state, action) {
           state.taskList = state.taskList.filter(task => task.id !== action.payload)
        },
        changeComplete(state, action) { //action payload === id
            state.taskList = state.taskList.map(task => {
                if(task.id === action.payload) {
                    task.completion = !task.completion
                }
                return task
            })

        }
    }
})

export const {addTask, removeTask, changeSearchTerm, changeComplete, changeChosenCategory} = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
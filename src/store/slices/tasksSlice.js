import { createSlice, nanoid } from "@reduxjs/toolkit";
import { fetchTasks } from "../thunks/fetchTasks";
import { addTask } from "../thunks/addTask";
import { deleteTask } from "../thunks/deleteTask";
const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        isLoading:false,
        error: null,
        searchTerm: '',
        chosenCategory: '',
        taskList: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload

        },
        changeChosenCategory(state, action) {

            state.chosenCategory = action.payload
        },
        // addTask(state, action) {
        //     let day = action.payload.dueDate.getDate();
        //     let month = [
        //       "Jan",
        //       "Feb",
        //       "Mar",
        //       "Apr",
        //       "May",
        //       "Jun",
        //       "Jul",
        //       "Aug",
        //       "Sep",
        //       "Oct",
        //       "Nov",
        //       "Dec",
        //     ][action.payload.dueDate.getMonth()];

        //     state.taskList.push({
        //         value: action.payload.value,
        //         dueDate: `${day} ${month}`,
        //         date: Date.parse(action.payload.dueDate),
        //         completion: false,
        //         category: action.payload.category,
        //         detail: action.payload.detail,
        //         id: nanoid()
        //     })
        // },
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
    },
    extraReducers(buider) {
        buider.addCase(fetchTasks.pending, (state, action) => {
            state.isLoading = true
        });
        buider.addCase(fetchTasks.fulfilled, (state, action) => {
            state.isLoading = false;
            state.taskList = action.payload
        });
        buider.addCase(fetchTasks.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        buider.addCase(addTask.pending, (state, action) => {
            state.isLoading = true
        });
        buider.addCase(addTask.fulfilled, (state, action) => {
            state.isLoading = false;
            state.taskList.push(action.payload);
        });
        buider.addCase(addTask.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
        buider.addCase(deleteTask.pending, (state, action) => {
            state.isLoading = true
        });
        buider.addCase(deleteTask.fulfilled, (state, action) => {
            state.isLoading = false;
            state.taskList = state.taskList.filter(task => task.id !==action.payload);
        });
        buider.addCase(deleteTask.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
})

export const { removeTask, changeSearchTerm, changeComplete, changeChosenCategory} = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer, addTask, removeTask } from "./slices/tasksSlice";
import { changeValue, formReducer, changeDetail, changeDueDate, changeCategory } from "./slices/formSlice";
import { addCategory, categoriesReducer, removeCategory } from "./slices/categoriesSlice";
import { categoryFormReducer, changeCategoryValue} from "./slices/categoryFormSlice";
const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        categories: categoriesReducer,
        form: formReducer,
        categoryForm: categoryFormReducer
    }
})



export { store, addTask, changeValue, changeDetail, changeDueDate, changeCategory, removeTask, addCategory, changeCategoryValue, removeCategory }
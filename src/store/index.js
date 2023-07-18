import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer, addTask, removeTask,changeSearchTerm, changeComplete, changeChosenCategory} from "./slices/tasksSlice";
import { changeValue, formReducer, changeDetail, changeDueDate, changeCategory } from "./slices/formSlice";
// import { addCategory, categoriesReducer, removeCategory } from "./slices/categoriesSlice";
import { categoryFormReducer, changeCategoryValue} from "./slices/categoryFormSlice";
import { categoriesApi } from "./apis/categoriesApi";
import { setupListeners } from "@reduxjs/toolkit/query";
const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        // categories: categoriesReducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        form: formReducer,
        categoryForm: categoryFormReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(categoriesApi.middleware)
    }
})

setupListeners(store.dispatch)


export * from './thunks/fetchTasks'
export * from './thunks/addTask'
export * from './thunks/deleteTask'
export {useFetchCategoriesQuery, useAddCategoryMutation, useDeleteCategoryMutation} from './apis/categoriesApi'
export { store, changeValue, changeDetail, changeDueDate, changeCategory, removeTask, changeCategoryValue, changeSearchTerm, changeComplete , changeChosenCategory}
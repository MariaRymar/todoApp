import { configureStore } from "@reduxjs/toolkit";
import {
  tasksReducer,
  changeSearchTerm,
  changeChosenCategory,
} from "./slices/tasksSlice";
import {
  changeValue,
  formReducer,
  changeDetail,
  changeDueDate,
  changeCategory,
} from "./slices/formSlice";
import {
  categoryFormReducer,
  changeCategoryValue,
  resetForm
} from "./slices/categoryFormSlice";
import { categoriesApi } from "./apis/categoriesApi";
import { setupListeners } from "@reduxjs/toolkit/query";
const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    form: formReducer,
    categoryForm: categoryFormReducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(categoriesApi.middleware);
  },
});

setupListeners(store.dispatch);

export * from "./thunks/fetchTasks";
export * from "./thunks/addTask";
export * from "./thunks/deleteTask";
export * from "./thunks/changeComplete";
export {
  useFetchCategoriesQuery,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
} from "./apis/categoriesApi";
export {
  store,
  changeValue,
  changeDetail,
  changeDueDate,
  changeCategory,
  changeCategoryValue,
  resetForm,
  changeSearchTerm,
  changeChosenCategory,
};

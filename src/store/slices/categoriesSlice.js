// import { createSlice,  nanoid } from "@reduxjs/toolkit";

// const categoriesSlice = createSlice({
//   name: "categories",
//   initialState: {
//     categoriesList: [],
//   },
//   reducers: {
//     addCategory(state, action) {
//        state.categoriesList.push({
//         value: action.payload.value,
//         label: action.payload.value,
//         color: 'blue',
//         id: nanoid()
//       });
//     },
//     removeCategory(state, action) {
//         state.categoriesList = state.categoriesList.filter(category => category.id !== action.payload)
//     }
//   },
// });

// export const { addCategory , removeCategory} = categoriesSlice.actions;
// export const categoriesReducer = categoriesSlice.reducer;

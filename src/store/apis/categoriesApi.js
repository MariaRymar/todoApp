import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const categoriesApi = createApi({
  reducerPath: "categories",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://my-json-server.typicode.com/MariaRymar/db",
  }),
  endpoints(buider) {
    return {
      fetchCategories: buider.query({
        providesTags: ["Category"],
        query: () => {
          return {
            url: "/categories",
            method: "GET",
          };
        },
      }),
      addCategory: buider.mutation({
        invalidatesTags: ["Category"],
        query: (category) => {
          return {
            url: "/categories",
            method: "POST",
            body: {
              value: category.value,
              label: category.value,
              color: category.color
            },
          };
        },
      }),
      deleteCategory: buider.mutation({
        invalidatesTags: ["Category"],
        query: (catId) => {
          return {
            url: `/categories/${catId}`,
            method: "DELETE",
            params: {
              id: catId,
            },
          };
        },
      }),
    };
  },
});

export const {
  useFetchCategoriesQuery,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
} = categoriesApi;
export { categoriesApi };

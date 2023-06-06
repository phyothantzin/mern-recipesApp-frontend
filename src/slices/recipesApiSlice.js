import { apiSlice } from './apiSlice'
const RECIPES_URL = 'https://mernrecipeapp.onrender.com/api/recipes'

export const recipesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchRecipes: builder.mutation({
      query: () => ({
        url: `${RECIPES_URL}`,
        headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        method: 'GET',
      }),
    }),
    fetchUserRecipes: builder.mutation({
      query: (data) => ({
        url: `${RECIPES_URL}`,
        credentials: "include",
        withCredentials: true,
        headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        method: 'POST',
        body: data,
      }),
    }),
    createRecipes: builder.mutation({
      query: (data) => ({
        url: `${RECIPES_URL}/create`,
        credentials: "include",
        headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        method: 'POST',
        body: data,
      }),
    }),
    saveRecipes: builder.mutation({
      query: (data) => ({
        url: `${RECIPES_URL}/save`,
        credentials: "include",
        withCredentials: true,
        headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        method: 'PUT',
        body: data,
      }),
    }),
    unsaveRecipes: builder.mutation({
      query: (data) => ({
        url: `${RECIPES_URL}/unsave`,
        credentials: "include",
        withCredentials: true,
        headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        method: 'PUT',
        body: data,
      }),
    }),
    deleteRecipes: builder.mutation({
      query: (data) => ({
        url: `${RECIPES_URL}/delete`,
        credentials: "include",
        withCredentials: true,
        headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        method: 'DELETE',
        body: data,
      }),
    }),
  }),
})

export const {
  useFetchRecipesMutation,
  useFetchUserRecipesMutation,
  useCreateRecipesMutation,
  useSaveRecipesMutation,
  useUnsaveRecipesMutation,
  useDeleteRecipesMutation,
} = recipesApiSlice

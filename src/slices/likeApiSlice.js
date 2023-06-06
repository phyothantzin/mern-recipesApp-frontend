import { apiSlice } from './apiSlice'
const LIKE_URL = 'https://mernrecipeapp.onrender.com/api/like'

export const likeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    likeRecipe: builder.mutation({
      query: (data) => ({
        url: `${LIKE_URL}`,
        credentials: "include",
        withCredentials: true,
        headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        method: 'POST',
        body: data,
      }),
    }),
    dislikeRecipe: builder.mutation({
      query: (data) => ({
        url: `${LIKE_URL}/remove`,
        credentials: "include",
        withCredentials: true,
        headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const { useLikeRecipeMutation, useDislikeRecipeMutation } = likeApiSlice

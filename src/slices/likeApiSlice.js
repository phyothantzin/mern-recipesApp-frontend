import { apiSlice } from './apiSlice'
const LIKE_URL = 'https://mernrecipeapp.onrender.com/api/like'

export const likeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    likeRecipe: builder.mutation({
      query: (data) => ({
        url: `${LIKE_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
    dislikeRecipe: builder.mutation({
      query: (data) => ({
        url: `${LIKE_URL}/remove`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const { useLikeRecipeMutation, useDislikeRecipeMutation } = likeApiSlice

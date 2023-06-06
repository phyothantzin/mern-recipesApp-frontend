import { apiSlice } from './apiSlice'
const USERS_URL = 'https://mernrecipeapp.onrender.com/api/users'

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        credentials: "include",
        withCredentials: true,
        headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        method: 'POST',
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        credentials: "include",
        withCredentials: true,
        headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        method: 'POST',
        body: data,
      }),
    }),
    update: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        credentials: "include",
        withCredentials: true,
        headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        method: 'PUT',
        body: data,
      }),
    }),
    logoutApiCall: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/logout`,
        credentials: "include",
        withCredentials: true,
        headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        method: 'POST',
      }),
    }),
  }),
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useUpdateMutation,
  useLogoutApiCallMutation,
} = usersApiSlice

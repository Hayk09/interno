// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const userApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getUserByName: builder.query({
      query: (id) => `/todos/${id}`,
    }),
    getUsersByName: builder.query({
        query: () => '/users'
    })
  }),
})


export const { useGetUserByNameQuery, useGetUsersByNameQuery } = userApi
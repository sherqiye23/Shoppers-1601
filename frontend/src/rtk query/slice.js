import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shoppersApi = createApi({
    reducerPath: 'shoppersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({
        getShoppers: builder.query({
            query: () => `shoppers`,
        }),
        getShopperById: builder.query({
            query: (id) => `shoppers/${id}`,
        }),
        deleteShopper: builder.mutation({
            query: (id) => ({
                url: `shoppers/${id}`,
                method: 'DELETE'
            }),
        }),
        postShopper: builder.mutation({
            query: (newData) => ({
                url: `shoppers`,
                method: 'POST',
                body: newData,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }),
        })
    }),
})

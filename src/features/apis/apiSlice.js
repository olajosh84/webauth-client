import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BASE_URL,
        credentials: 'include', //this is very important especially if you need to send cookiee to client
        prepareHeaders: (headers) => {
            return headers;
        }
    }),
    tagTypes: ["Auth", "User"],
    endpoints: (builder) => ({})
})
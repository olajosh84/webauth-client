import { apiSlice } from "./apiSlice"

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updateProfile: builder.mutation({
            query: data => ({
                url: "/users/updateProfile",
                method: "PATCH",
                body: data
            })
        }),
    })
})

export const { useUpdateProfileMutation } = userApiSlice;
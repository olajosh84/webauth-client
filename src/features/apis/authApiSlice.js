import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        register: builder.mutation({
            query: (data) => ({
                url: "/auth/signUp",
                method: "POST",
                credentials: 'include',
                body: data,
            })
        }),
        login: builder.mutation({
            query: data => ({
                url: "/auth/signIn",
                method: "POST",
                credentials: 'include',
                body: data,
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: "/auth/signOut",
                method: "POST",
                credentials: 'include'
            })
        }),
        authenticateUser: builder.mutation({
            query: () => ({
                url: "/auth/authenticateUser",
                //method: "GET",
                credentials: 'include',
            })
        }),
        verifyEmail: builder.mutation({
            query: (data) => ({
                url: "/auth/verifyEmail",
                method: "POST",
                credentials: 'include',
                body: data,
            })
        }),
        verifyOtp: builder.mutation({
            query: (data) => ({
                url: "/auth/verifyOtp",
                method: "POST",
                credentials: 'include',
                body: data,
            })
        }),
        resetPassword: builder.mutation({
            query: data => ({
                url: "/auth/resetPassword",
                method: "PATCH",
                credentials: 'include',
                body: data
            })
        }),
        sendMail: builder.mutation({
            query: data => ({
                url: "/auth/sendMail",
                method: "POST",
                credentials: 'include',
                body: data
            })
        }),
        confirmUser: builder.mutation({
            query: data => ({
                url: "/auth/confirmUser",
                method: "PATCH",
                credentials: 'include',
                body: data
            })
        })
    })
});

export const { 
    useRegisterMutation, 
    useLoginMutation, 
    useLogoutMutation, 
    useAuthenticateUserMutation,
    useVerifyEmailMutation,
    useVerifyOtpMutation,
    useResetPasswordMutation, 
    useSendMailMutation,
    useConfirmUserMutation
} = authApiSlice;
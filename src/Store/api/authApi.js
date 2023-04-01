import { apiSlice } from "./apiSlice";


export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (data) => ({
                url: `user/signup`,
                method: "POST",
                // headers: { "Content-Type": "multipart/form-data", boundary: 'MyBoundary' },
                body: data
            })
        }),
        loginUser: builder.mutation({
            query: (data) => ({
                url: 'user/login',
                method: 'POST',
                body: data,
                credentials: 'include'
            })
        }),
        logoutUser: builder.mutation({
            query: () => ({
                url: "user/logout",
                method: 'POST',
                credentials: "include"
            })
        })
    })
})

export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useLogoutUserMutation
} = authApi;

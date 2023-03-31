import { apiSlice } from "./apiSlice";


export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (data) => ({
                url: `/signup`,
                method: "POST",
                // headers: { "Content-Type": "multipart/form-data", boundary: 'MyBoundary' },
                body: data
            })
        }),
        loginUser: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: 'POST',
                body: data,
                credentials: 'include'
            })
        }),
        logoutUser: builder.mutation({
            query: () => ({
                url: "/logout",
                method: 'POST',
                credentials: "include"
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled
                } catch (error) {

                }
            }
        })
    })
})

export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useLogoutUserMutation
} = authApi;

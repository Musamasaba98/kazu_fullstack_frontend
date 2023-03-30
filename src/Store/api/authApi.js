import { apiSlice } from "./apiSlice";
import { userApi } from "./userApi";


export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (user) => ({
                url: `/signup`,
                method: "POST",
                body: user
            })
        }),
        loginUser: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: 'POST',
                body: data,
                credentials: 'include'
            }),
            providesTags: ['User']
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

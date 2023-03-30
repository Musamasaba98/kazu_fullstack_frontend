import { apiSlice } from "./apiSlice";

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMe: builder.query({
            query: () => ({
                url: `/me`,
                credentials: "include",
            }),
            transformResponse: (result) => {
                return result.data.user
            }
        }),
    }),
})

export const { useGetMeQuery, useLazyGetMeQuery } = userApi
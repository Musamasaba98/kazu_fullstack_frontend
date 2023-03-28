import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:10000/api/v1"

const baseQuery = fetchBaseQuery({
    baseUrl: `${BASE_URL}/user`,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().user.token
        console.log(token)
        if (token) {
            headers.set("Authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result?.error?.originalStatus === 403) {
        console.log("sending refresh token")
        //send refresh token to get new access token
        const refreshResult = await baseQuery('/token', api, extraOptions)
        console.log(refreshResult)
        if (refreshResult?.data) {
            // const user = api.getState().user.user
            api.dispatch(setCredentials({ ...refreshResult.data }))
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }
    }
    return result
}

export const apiSlice = createApi({
    reducerPath: 'authSlice',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['User'],
    endpoints: builder => ({})
})
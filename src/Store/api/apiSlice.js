import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from '../features/userSlice'

const BASE_URL = "http://localhost:10000/api/v1"

const baseQuery = fetchBaseQuery({
    baseUrl: `${BASE_URL}/user`,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().user.token
        if (token) {
            headers.set("Authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result?.error?.status === 403) {
        //send refresh token to get new access token
        const refreshResult = await baseQuery('/token', api, extraOptions);
        if (refreshResult) {
            api.dispatch(setCredentials({ accessToken: refreshResult.data.accessToken }))
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logout());
        }
    }


    return result;
}

export const apiSlice = createApi({
    reducerPath: 'authSlice',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['User'],
    endpoints: builder => ({}),
    keepUnusedDataFor: 0,
})
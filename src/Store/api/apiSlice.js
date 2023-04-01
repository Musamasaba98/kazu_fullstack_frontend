import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from '../features/userSlice'

const BASE_URL = import.meta.env.VITE_BASE_URL

const baseQuery = fetchBaseQuery({
    baseUrl: `${BASE_URL}/`,
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
        const refreshResult = await baseQuery('user/token', api, extraOptions);
        if (refreshResult) {
            api.dispatch(setCredentials({ accessToken: refreshResult.data.accessToken }))
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logout());
        }
    }


    return result;
}
// Create a custom fetch function that uses the RTK Query API instance to handle expired access tokens
export const myFetch = async (url, options = {}) => {
    const response = await fetch(url, options);
    if (response.status === 401) {
        // If the response status is 401 (Unauthorized), the access token has expired
        // Refresh the access token and retry the original request with the new token
        const { data } = await api.endpoints.refreshTokenMutation(); // call an RTK Query mutation to refresh the access token
        setToken(data.accessToken); // save the new access token to the store
        const newOptions = { ...options };
        const headers = new Headers(newOptions.headers || {});
        headers.set('Authorization', `Bearer ${data.accessToken}`);
        newOptions.headers = headers;
        return fetch(url, newOptions);
    }
    return response;
};
export const apiSlice = createApi({
    reducerPath: 'authSlice',
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({}),
    keepUnusedDataFor: 0,
    tagTypes: ["Movies"]
})
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    user: null,
    token: null
};

const userSlice = createSlice({
    initialState,
    name: 'userSlice',
    reducers: {
        setCredentials: (state, action) => {
            const { accessToken, data } = action.payload
            state.token = accessToken
            state.user = data;
        },
        logout: () => initialState,
        setUser: (state, action) => {
            console.log(action.payload)
            state.user = action.payload;
        },
    },
});

export default userSlice;

export const userActions = userSlice.actions;


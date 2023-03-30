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
            const { accessToken } = action.payload
            state.token = accessToken
        },
        logout: (state) => state = initialState,
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export default userSlice;

export const { setCredentials, logout, setUser } = userSlice.actions;


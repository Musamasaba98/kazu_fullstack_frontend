import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        users: [],
        user: null,
        isLoggedIn: false
    },
    reducers: {
        registerUser: (state, action) => {
            const newUser = action.payload
            const existingUser = state.users.findIndex((item) => item.email === newUser.email)
            if (existingUser === -1) {
                state.users = [newUser, ...state.users]
            }
        },
        loginUser: (state, action) => {
            const user = action.payload
            const existingUser = state.users.find((item) => item.email === user.email)
            if (existingUser) {
                state.user = user
                state.isLoggedIn = true
            }

        },
        logoutUser: (state, action) => {
            const user = action.payload
            state.isLoggedIn = false
            state.user = null
        },
        deleteUser: (state, action) => {
            const user = action.payload
            const existingUser = state.users.findIndex((item) => item.email === user.email)
            state.users.splice(existingUser, 1)
            state.user = null
        }
    }
})

export const authActions = authSlice.actions
export default authSlice
import { createSlice } from "@reduxjs/toolkit";

const myListSlice = createSlice({
    name: "myList",
    initialState: {
        itemList: [],
        totalQuantity: 0,
        totalPrice: 0
    },
    reducers: {
        addToMyList: (state, action) => {
            const newItem = action.payload
            state.itemList = [newItem, ...state.itemList]
            state.totalQuantity = state.itemList.reduce((accumulator, item) => accumulator + item.quantity, 0)
            state.totalPrice = state.itemList.reduce((accumulator, item) => accumulator + item.cummulativePrice, 0)
        },
        removeFromMyList: (state, action) => {
            const indexOfItem = state.itemList.findIndex(item => item.id === action.payload)
            state.itemList.splice(indexOfItem, 1)
            state.totalQuantity = state.itemList.reduce((accumulator, item) => accumulator + item.quantity, 0)
            state.totalPrice = state.itemList.reduce((accumulator, item) => accumulator + item.cummulativePrice, 0)
        },
        clearAllItems: (state) => {
            state.itemList = []
        }
    }
})
export const myListActions = myListSlice.actions
export default myListSlice
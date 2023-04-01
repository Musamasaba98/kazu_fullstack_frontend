import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import myListSlice from "./features/myListSlice";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./features/userSlice";
import { apiSlice } from "./api/apiSlice";
import { userApi } from "./api/userApi";



const persistConfig = {
    key: "root",
    storage: storage
}
const rootReducer = combineReducers({
    myList: myListSlice.reducer,
    user: userSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], } }).concat([apiSlice.middleware, userApi.middleware])
})

setupListeners(store.dispatch)
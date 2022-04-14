import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import {configureStore, combineReducers} from "@reduxjs/toolkit";
import visible from "../Actions/Visible/Visible.Slice";


import storage from "./Storage";

const rootReducer = combineReducers({
    visible
})


const persistConfig = {
    key: 'root', storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,],
            },
        }).concat(),
})

export const persistor = persistStore(store)
export default store

export type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;

import { combineReducers, configureStore, } from "@reduxjs/toolkit";
import movieReducer from "./movieRedux";
import userReducer from "./userRedux";
import listReducer from './listRedux';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}


const rootReducer = combineReducers({ user: userReducer , movie: movieReducer , list: listReducer})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: {
        movie: movieReducer,
        user: persistedReducer,
        list: listReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER],
            },
        }),
});


export let persistor = persistStore(store);


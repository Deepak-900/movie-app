import { combineReducers } from "redux";
import movieReducer from "./movieStore";


import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const rootReducer = combineReducers({
    movieStore: movieReducer
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export let store = createStore(persistedReducer)
export let persistor = persistStore(store)
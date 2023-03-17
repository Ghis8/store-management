import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import userSlice from "./slices/userSlice";
import appApi from "./services/appApi";

//persist store
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import thunk from "redux-thunk";


//reducers

const reducer=combineReducers({
    user:userSlice,
    products:productSlice,
    [appApi.reducerPath]:appApi.reducer,
})

const persistConfig={
    key:'root',
    storage,
    blackList:[appApi.reducerPath,'products'],
}

const persistedReducer=persistReducer(persistConfig,reducer)

//create store

const store=configureStore({
    reducer:persistedReducer,
    middleware:[thunk,appApi.middleware]
})

export default store
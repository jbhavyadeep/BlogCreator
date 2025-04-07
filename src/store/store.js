import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice.js'
const store = configureStore({
    reducer: {
        auth: authSlice,

        //TODO: add more slice here for posts
    }
});

export default store;
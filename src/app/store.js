import {configureStore} from "@reduxjs/toolkit";
import searchReducer from '/src/features/search/searchSlice.js'

export const store = configureStore({
    reducer: {
        search: searchReducer,
    }
})
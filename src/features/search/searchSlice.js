import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    error: null,
    isLoading: false,
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: {},
})

export default searchSlice.reducer


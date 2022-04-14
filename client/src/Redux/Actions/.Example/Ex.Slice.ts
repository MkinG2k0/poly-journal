import {createSlice} from "@reduxjs/toolkit";
import {initialState} from "./Ex.Init";
import {extraReducers} from "./Ex.Reducers";
import {reducers} from "./Ex.ExReducers";

const example = createSlice({
    name: 'example', initialState, reducers, extraReducers
})

export const {} = example.actions

export default example.reducer;
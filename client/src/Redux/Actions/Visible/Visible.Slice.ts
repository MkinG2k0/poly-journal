import {createSlice} from "@reduxjs/toolkit";
import {initialState} from "./Visible.Init";
import {reducers} from "./Visible.Reducers";
import {extraReducers} from "./Visible.ExReducers";


const visible = createSlice({
    name: 'visible', initialState, reducers, extraReducers
})

export const {toggleLayout} = visible.actions

export default visible.reducer;
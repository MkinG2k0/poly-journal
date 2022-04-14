import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchExample = createAsyncThunk('fetch/example',
    async function (_, {rejectWithValue}) {
        try {
            //...
            return 'a'
        } catch (e) {
            return rejectWithValue(e.message)
        }
    })
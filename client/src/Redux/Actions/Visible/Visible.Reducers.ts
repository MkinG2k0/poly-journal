import {IVisible} from "./Visible.Model";
import {PayloadAction} from "@reduxjs/toolkit";

type TLayout_path = 'leftMenu'

export const reducers = {
    toggleLayout(state: IVisible, action: PayloadAction<TLayout_path>) {
        state.layout[action.payload] = !state.layout[action.payload]
    },
}
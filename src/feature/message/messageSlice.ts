import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { messageType } from "../../common/message.type";

const state: messageType[] = [];

export const messageSlice = createSlice({
    name: "messageSlice",
    initialState: state,
    reducers: {
        addMessage: (state, action: PayloadAction<messageType>) => {
            state.push(action.payload);
        },
        resetMessage: (state) => {
            state.length = 0;
        },
    },
});

export const { addMessage, resetMessage } = messageSlice.actions;

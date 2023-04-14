import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { messageType } from "../../common/message.type";

const state = {
    messages: [
        {
            id: 1,
            userUid: 1,
            content: "aaa",
        },
        {
            id: 2,
            userUid: 2,
            content: "bbb",
        },
    ],
};

export const messageSlice = createSlice({
    name: "messageSlice",
    initialState: state,
    reducers: {
        addMessage: (state, action: PayloadAction<messageType>) => {
            state.messages.push(action.payload);
        },
    },
});

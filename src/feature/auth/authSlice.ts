import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userType } from "../../common/auth.type";

const state = {
    userName: "",
    uid: "",
    isSignIn: false,
};

export const authSlice = createSlice({
    name: "authSlice",
    initialState: state,
    reducers: {
        login: (state, action: PayloadAction<userType>) => {
            state.userName = action.payload.userName;
            state.uid = action.payload.uid;
            state.isSignIn = action.payload.isSignIn;
        },
    },
});

export const { login } = authSlice.actions;

import { configureStore } from "@reduxjs/toolkit";
import { messageSlice } from "../feature/message/messageSlice";
import { authSlice } from "../feature/auth/authSlice";
/**
 * ストア登録
 */
export const store = configureStore({
    reducer: authSlice.reducer,
});

import { configureStore } from "@reduxjs/toolkit";
import { messageSlice } from "../feature/message/messageSlice";
import { authSlice } from "../feature/auth/authSlice";
import rootReducer from "../feature/reducers";
/**
 * ストア登録
 */
export const store = configureStore({
    reducer: rootReducer,
});

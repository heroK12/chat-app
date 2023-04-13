import { configureStore } from "@reduxjs/toolkit";
import { messageSlice } from "../feature/message/messageSlice";

/**
 * ストア登録
 * 登録済み
 * ・メッセージ
 *
 * 登録予定
 * ・ユーザー関連
 */
export const store = configureStore({
    reducer: messageSlice.reducer,
});

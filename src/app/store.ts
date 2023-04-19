import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../feature/reducers";
/**
 * ストア登録
 */
export const store = configureStore({
    reducer: rootReducer,
});

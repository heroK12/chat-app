import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from './auth/authSlice';
import { messageSlice } from './message/messageSlice';

export default combineReducers({
    auth: authSlice.reducer,
    message: messageSlice.reducer
})
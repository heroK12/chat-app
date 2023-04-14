import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../views/Login";
import { ChatArea } from "../views/Chat";
import { NotFound } from "../views/NotFound";

export const RouterConfig = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Login />} />
                    <Route path="chat" element={<ChatArea />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

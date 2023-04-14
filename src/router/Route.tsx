import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../views/Login";
import { Chat } from "../views/Chat";
import { NotFound } from "../views/NotFound";
import { useSelector } from "react-redux";
import { rootState } from "../common/rootState.type";

export const RouterConfig = () => {
    const isLoggedIn = useSelector((state: rootState) => state.isSignIn);
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            isLoggedIn ? (
                                <Chat />
                            ) : (
                                <Navigate replace to="/Login" />
                            )
                        }
                    />
                    <Route
                        path="/Login"
                        element={
                            !isLoggedIn ? (
                                <Login />
                            ) : (
                                <Navigate replace to="/" />
                            )
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

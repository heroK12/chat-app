import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../views/Login";
import { Chat } from "../views/Chat";
import { NotFound } from "../views/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../common/rootState.type";
import { login } from "../feature/auth/authSlice";

const loginUser = localStorage.getItem("user");

export const RouterConfig = () => {
    const isLogin = useSelector((state: rootState) => state.auth.isSignIn);
    const dispatch = useDispatch();

    useEffect(() => {
        if (loginUser) {
            dispatch(login(JSON.parse(loginUser)));
        }
    }, [dispatch]);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            isLogin ? (
                                <Chat />
                            ) : (
                                <Navigate replace to="/Login" />
                            )
                        }
                    />
                    <Route
                        path="/Login"
                        element={
                            !isLogin ? <Login /> : <Navigate replace to="/" />
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

import { TextField } from "../feature/auth/TextField";
import React, { useState } from "react";
import { validateNameField } from "../feature/auth/validation";
import { getAuth, signInAnonymously } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../feature/auth/authSlice";

export interface FormField {
    userName: string;
}

export interface FormErrors {
    userName?: string;
}

export const Login = () => {
    const [user, setUser] = useState<FormField>({ userName: "" });
    const [errors, setErrors] = useState<FormErrors>({});
    const dispatch = useDispatch();

    const validate = (name: string, value: string) => {
        if (name === "userName") {
            setErrors({ ...errors, [name]: validateNameField(value) });
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const auth = getAuth();
        signInAnonymously(auth)
            .then((UserCredentialImpl: any) => {
                localStorage.setItem(
                    "user",
                    JSON.stringify({
                        userName: user.userName,
                        uid: UserCredentialImpl.user.uid,
                        isSignIn: true,
                    })
                );

                dispatch(
                    login({
                        userName: user.userName,
                        uid: UserCredentialImpl.user.uid,
                        isSignIn: true,
                    })
                );
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        validate(name, value);
    };

    const isEnterButtonDisabled = () => {
        if (!user.userName) {
            return true;
        }
        if (!!errors.userName) {
            return true;
        }
        return false;
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="container m-4 p-12 w-500 text-center rounded-md shadow-lg max-w-3xl mx-auto bg-white ">
                <img
                    src="https://placehold.jp/300x300.png"
                    alt=""
                    className="block mx-auto mb-3 text-center w-24"
                />
                <h1 className="mb-8 text-3xl font-bold text-gray-700">
                    ログイン
                </h1>
                <form onSubmit={handleSubmit}>
                    <TextField
                        title="ユーザー名"
                        name="userName"
                        placeholder="ユーザー名を入力してください"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.userName}
                    />
                    <div className="mb-3">
                        <button
                            className="w-full p-3 border border-gray-200 rounded-md shadow-md bg-indigo-500 disabled:opacity-50 focus:outline-none"
                            disabled={isEnterButtonDisabled()}
                        >
                            入室する
                        </button>
                    </div>
                </form>
                {/* <button
                    className="w-full p-3 border border-gray-200 rounded-md shadow-md bg-orange-500 disabled:opacity-50 focus:outline-none"
                >
                    ログイン確認
                </button> */}
            </div>
        </div>
    );
};

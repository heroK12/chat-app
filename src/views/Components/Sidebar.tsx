import { useSelector } from "react-redux";
import { rootState } from "../../common/rootState.type";
import { userType } from "../../common/auth.type";
import React from "react";

interface Props {
    loginUsers: userType[];
}

export const Sidebar: React.FC<Props> = ({ loginUsers }) => {
    const userInfo = useSelector((state: rootState) => state.auth);

    return (
        <div className="flex-none bg-indigo-700 overflow-y-auto flex-grow w-64">
            <div className="flex flex-col h-full ">
                <div className="items-center my-2 mt-5 font-bold text-white text-center">
                    LoginUser
                </div>
                {loginUsers.map((user, index) => (
                    <>
                        <div className="flex items-center my-2 mx-2 border border-transparent  rounded-md bg-indigo-800 h-16">
                            <span className="h-2 w-2 mx-4 rounded-full bg-emerald-500 ring ring-white"></span>
                            <div
                                className="text-white font-bold"
                                key={`${user}-${index}`}
                            >
                                {user.userName}
                            </div>
                        </div>
                    </>
                ))}
                <div className="mt-auto">
                    <div className="text-center">
                        <span className="items-center my-2 mt-5 font-bold text-white">
                            MyUser Info
                        </span>
                    </div>
                    <div className="flex items-center my-2 mx-2 border border-transparent rounded-md bg-indigo-800 h-16">
                        <span className="h-2 w-2 mx-4 rounded-full bg-emerald-500 ring ring-white"></span>
                        <div className="text-white font-bold">
                            {userInfo.userName}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

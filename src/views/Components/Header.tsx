import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../feature/auth/authSlice";
import { Link } from "react-router-dom";
import { resetMessage } from "../../feature/message/messageSlice";
import { getDatabase, onDisconnect, ref, update } from "firebase/database";
import { rootState } from "../../common/rootState.type";

export const Header = () => {
    const userInfo = useSelector((state: rootState) => state.auth);
    const db = getDatabase();
    const userRef = ref(db, `users/${userInfo.uid}`);
    const dispatch = useDispatch();

    const onClickLogout = () => {
        update(userRef, { status: "offline" });
        localStorage.removeItem("users");
        dispatch(logout());
        dispatch(resetMessage());
    };
    return (
        <>
            <nav className="w-full text-gray-600 header-nav">
                <div className="flex justify-between bg-gray-50 mx-auto h-full items-center">
                    <Link className="flex items-center text-gray-900" to="/">
                        <img
                            src="https://placehold.jp/300x300.png"
                            alt=""
                            className="h-14 w-14 p-2 "
                        />
                        <h2 className="text-xl font-bold">Chat-app</h2>
                    </Link>
                    <button
                        className="px-6 py-3 text-white border border-gray-200 rounded-md shadow-md bg-indigo-700 disabled:opacity-50 focus:outline-none"
                        onClick={onClickLogout}
                    >
                        ログアウト
                    </button>
                </div>
            </nav>
        </>
    );
};

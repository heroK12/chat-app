import { useSelector } from "react-redux";
import { rootState } from "../common/rootState.type";

export const Chat = () => {
    const loggedIn = useSelector((state: rootState) => state);
    return (
        <>
            <div>チャットスペース</div>
            <button
                className="w-full p-3 border border-gray-200 rounded-md shadow-md bg-orange-500 disabled:opacity-50 focus:outline-none"
                onClick={() => console.log("loggin:", loggedIn)}
            >
                ログイン確認
            </button>
        </>
    );
};

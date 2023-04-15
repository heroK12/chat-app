import { useSelector } from "react-redux";
import { rootState } from "../../common/rootState.type";

export const Sidebar = () => {
    const userInfo = useSelector((state: rootState) => state.auth);

    return (
        <div className="flex-none bg-indigo-700 overflow-y-auto flex-grow">
            <div className="flex flex-col h-full">
                <div>なにか一覧表示する</div>
                <div className="mt-auto">
                    <div>ユーザー名: {userInfo.userName}</div>
                </div>
            </div>
        </div>
    );
};

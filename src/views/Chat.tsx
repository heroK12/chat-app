import {
    getDatabase,
    onChildAdded,
    ref,
    update,
    onDisconnect,
} from "firebase/database";
import { ChatArea } from "./Components/ChatArea";
import { Sidebar } from "./Components/Sidebar";
import { Header } from "./Components/Header";
import { FirebaseError } from "firebase/app";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../feature/message/messageSlice";
import { rootState } from "../common/rootState.type";
import { getAuth } from "firebase/auth";

export const Chat = () => {
    const userInfo = useSelector((state: rootState) => state.auth);
    const messages = useSelector((state: rootState) => state.message);
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            const uid = userInfo.uid;
            const db = getDatabase();
            const chatRef = ref(db, "chat");
            const userRef = ref(db, `user/${uid}`);
            // ユーザーのログイン情報を管理したいがまだ未実装…
            // const usersRef = ref(db, "user");

            //DB上のユーザー情報を変更
            update(userRef, {
                userName: userInfo.userName,
                uid: uid,
                status: "online",
            }).then(() => {
                // 切断されたときにDB上を更新
                onDisconnect(userRef).set({});
            });

            // チャット上で更新があった場合に実行する
            return onChildAdded(chatRef, (snapshot) => {
                const value = snapshot.val();
                dispatch(addMessage(value));
            });
        } catch (e) {
            if (e instanceof FirebaseError) {
                console.log(e);
            }
        }
    }, []);

    return (
        <>
            <Header />
            <div className="flex m-0 content">
                <Sidebar />
                <ChatArea messages={messages} />
            </div>
        </>
    );
};

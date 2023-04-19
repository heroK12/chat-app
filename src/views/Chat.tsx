import {
    getDatabase,
    onChildAdded,
    ref,
    update,
    onDisconnect,
    onValue,
} from "firebase/database";
import { ChatArea } from "./Components/ChatArea";
import { Sidebar } from "./Components/Sidebar";
import { Header } from "./Components/Header";
import { FirebaseError } from "firebase/app";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../feature/message/messageSlice";
import { rootState } from "../common/rootState.type";
import { userType } from "../common/auth.type";

export const Chat = () => {
    // 状態管理関連
    const userInfo = useSelector((state: rootState) => state.auth);
    const messages = useSelector((state: rootState) => state.message);
    const [users, setUsers] = useState<userType[]>([]);
    const dispatch = useDispatch();

    // DB関連
    const uid = userInfo.uid;
    const db = getDatabase();
    const chatRef = ref(db, "chat");
    const userRef = ref(db, `users/${uid}`);
    const usersRef = ref(db, "users");

    useEffect(() => {
        try {
            //DB上のユーザー情報を変更
            update(userRef, {
                userName: userInfo.userName,
                uid: uid,
                status: "online",
            }).then(() => {
                // 切断されたときにDB上を更新
                onDisconnect(userRef).set({});
            });

            // ログイン中のユーザー取得
            getLoginUsers();

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    /**
     * ユーザーの情報をモニタリング
     */
    const getLoginUsers = () => {
        onValue(usersRef, (snapshot) => {
            if (snapshot.exists()) {
                const allUsers = snapshot.val();
                const loginUsers = [];
                for (let key in allUsers) {
                    if (allUsers[key].status === "online") {
                        loginUsers.push(allUsers[key]);
                    }
                }
                setUsers(loginUsers);
            } else {
            }
        });
    };

    return (
        <>
            <Header />
            <div className="flex m-0 content">
                <Sidebar loginUsers={users} />
                <ChatArea messages={messages} />
            </div>
        </>
    );
};

import { getDatabase, onChildAdded, ref } from "firebase/database";
import { ChatArea } from "./Components/ChatArea";
import { Sidebar } from "./Components/Sidebar";
import { Header } from "./Components/Header";
import { FirebaseError } from "firebase/app";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../feature/message/messageSlice";
import { rootState } from "../common/rootState.type";

export const Chat = () => {
    const messages = useSelector((state: rootState) => state.message);
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            const db = getDatabase();
            const dbRef = ref(db, "chat");
            return onChildAdded(dbRef, (snapshot) => {
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

import { FirebaseError } from "firebase/app";
import { getDatabase, push, ref } from "firebase/database";
import React, { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { rootState } from "../../common/rootState.type";
import { messageType } from "../../common/message.type";

interface Props {
    messages: messageType[];
}

export const ChatArea: React.FC<Props> = ({ messages }) => {
    const [message, setMessage] = useState<string>("");
    const userInfo = useSelector((state: rootState) => state.auth);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const db = getDatabase();
            const dbRef = ref(db, "chat");
            await push(dbRef, {
                uid: userInfo.uid,
                userName: userInfo.userName,
                content: message,
                date: Date.now(),
            });
            setMessage("");
        } catch (e) {
            if (e instanceof FirebaseError) {
                console.log(e);
            }
        }
    };

    return (
        <div className="flex flex-col overflow-y-auto w-full">
            <div className="flex-1 overflow-y-auto bg-gray-100">
                <div className="bg-gray-100 px-4 py-2">
                    <div className="rounded-lg p-4 mb-4">
                        {messages.map((message: messageType, i: number) => (
                            <div
                                className="rounded-lg bg-white p-4 mb-4"
                                key={`${message.userUid}-${message.date}-${i}`}
                            >
                                <div className="flex items-center mb-2">
                                    <div className="text-gray-800 font-bold mr-4">
                                        {message.userName}
                                    </div>
                                    <div className="text-gray-600">
                                        {new Date(
                                            Number(message.date)
                                        ).toLocaleString()}
                                    </div>
                                </div>
                                <div className="text-gray-600">
                                    {message.content}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 px-4 py-2">
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center">
                        <input
                            type="text"
                            className="flex-1 bg-white border border-gray-400 rounded-lg px-4 py-2 mr-2"
                            placeholder="メッセージを入力してください"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
                        >
                            送信
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

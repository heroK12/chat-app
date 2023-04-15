export const ChatArea = () => {
    return (
        <div className="flex flex-col overflow-y-auto w-full">
            <div className="flex-1 overflow-y-auto bg-gray-100">
                <div className="bg-gray-100 px-4 py-2">
                    <div className="rounded-lg p-4 mb-4">
                        <div className="rounded-lg bg-white p-4 mb-4">
                            <div className="text-gray-800 font-bold">
                                ユーザー名
                            </div>
                            <div className="text-gray-600">メッセージ</div>
                        </div>
                        <div className="rounded-lg bg-white p-4 mb-4">
                            <div className="text-gray-800 font-bold">
                                ユーザー名
                            </div>
                            <div className="text-gray-600">メッセージ</div>
                        </div>
                        <div className="rounded-lg bg-white p-4 mb-4">
                            <div className="text-gray-800 font-bold">
                                ユーザー名
                            </div>
                            <div className="text-gray-600">メッセージ</div>
                        </div>
                        <div className="rounded-lg bg-white p-4 mb-4">
                            <div className="text-gray-800 font-bold">
                                ユーザー名
                            </div>
                            <div className="text-gray-600">メッセージ</div>
                        </div>
                        <div className="rounded-lg bg-white p-4 mb-4">
                            <div className="text-gray-800 font-bold">
                                ユーザー名
                            </div>
                            <div className="text-gray-600">メッセージ</div>
                        </div>
                        <div className="rounded-lg bg-white p-4 mb-4">
                            <div className="text-gray-800 font-bold">
                                ユーザー名
                            </div>
                            <div className="text-gray-600">メッセージ</div>
                        </div>
                        <div className="rounded-lg bg-white p-4 mb-4">
                            <div className="text-gray-800 font-bold">
                                ユーザー名
                            </div>
                            <div className="text-gray-600">メッセージ</div>
                        </div>
                        <div className="rounded-lg bg-white p-4 mb-4">
                            <div className="text-gray-800 font-bold">
                                ユーザー名
                            </div>
                            <div className="text-gray-600">メッセージ</div>
                        </div>
                        <div className="rounded-lg bg-white p-4 mb-4">
                            <div className="text-gray-800 font-bold">
                                ユーザー名
                            </div>
                            <div className="text-gray-600">メッセージ</div>
                        </div>
                        <div className="rounded-lg bg-white p-4 mb-4">
                            <div className="text-gray-800 font-bold">
                                ユーザー名
                            </div>
                            <div className="text-gray-600">メッセージ</div>
                        </div>
                        <div className="rounded-lg bg-white p-4 mb-4">
                            <div className="text-gray-800 font-bold">
                                ユーザー名
                            </div>
                            <div className="text-gray-600">メッセージ</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 px-4 py-2">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="flex items-center">
                        <input
                            type="text"
                            className="flex-1 bg-white border border-gray-400 rounded-lg px-4 py-2 mr-2"
                            placeholder="メッセージを入力してください"
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

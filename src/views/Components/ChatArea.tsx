export const ChatArea = () => {
    return (
        <div className="flex-1 w-full">
            <div className="flex-none pb-4 px-4">
                <form onSubmit={() => console.log("submit")}>
                    <input
                        type="text"
                        name="messageInput"
                        className="w-full p-3 placeholder-gray-300 rounded-md shadow-md focus:outline-none focus:border-blue"
                        placeholder="メッセージを入力"
                    />
                    <button className="hidden">Submit</button>
                </form>
            </div>
        </div>
    );
};

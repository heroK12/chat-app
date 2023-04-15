import { ChatArea } from "./Components/ChatArea";
import { Sidebar } from "./Components/Sidebar";
import { Navbar } from "./Components/Navbar";

export const Chat = () => {
    

    return (
        <>
            <div className="flex flex-col h-screen">
                <Navbar />
                <div className="flex h-full">
                    <Sidebar />
                    <ChatArea />
                </div>
            </div>
        </>
    );
};

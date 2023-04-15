import { ChatArea } from "./Components/ChatArea";
import { Sidebar } from "./Components/Sidebar";
import { Header } from "./Components/Header";

export const Chat = () => {
    return (
        <>
            <Header />
            <div className="flex m-0 content">
                <Sidebar />
                <ChatArea />
            </div>
        </>
    );
};

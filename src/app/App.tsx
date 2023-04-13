import { ChatArea } from "../feature/message/ChatArea";
import { Provider } from "react-redux";
import { store } from "./store";
import { getApp } from "firebase/app";
import { initializeFirebaseApp } from "../lib/firebase/firebase";

initializeFirebaseApp();
function App() {
    console.log(getApp());
    return (
        <div className="App">
            <Provider store={store}>
                <ChatArea />
            </Provider>
        </div>
    );
}

export default App;

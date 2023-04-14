import { Provider } from "react-redux";
import { getApp } from "firebase/app";
import { store } from "./store";
import { initializeFirebaseApp } from "../lib/firebase/firebase";
import { RouterConfig } from "../router/Route";

initializeFirebaseApp();
function App() {
    console.log(getApp());
    return (
        <div className="App">
            <Provider store={store}>
                <RouterConfig />
            </Provider>
        </div>
    );
}

export default App;

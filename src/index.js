import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App_Container";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { forum_reducer } from "../src/reducers/forum_reducer";
import thunk from "redux-thunk";

const store = createStore(forum_reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();

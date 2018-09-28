import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import { forum_reducer } from "../src/reducers/forum_reducer";
import Root from "./components/Root";

import thunk from "redux-thunk";

const store = createStore(forum_reducer, applyMiddleware(thunk));

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
registerServiceWorker();

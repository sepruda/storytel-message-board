import React, { Component } from "react";
import "./App.css";

import Forum from "./components/forum/Forum";
import NewTopic from "./components/forum/NewTopic";

class App extends Component {
    componentDidMount() {
        this.props.requestData();
    }

    render() {
        return (
            <React.Fragment>
                {/* <Breadcrumb /> */}
                <Forum />
                <NewTopic />
                {/* <Login /> */}
            </React.Fragment>
        );
    }
}

export default App;

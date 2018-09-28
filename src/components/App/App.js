import React, { Component } from "react";
import "./App.css";

import Forum from "../forum/Forum";
import NewTopic from "../forum/NewTopic";

class App extends Component {
    componentDidMount() {
        console.log(this.props);
        this.props.requestData();
    }

    render() {
        return (
            <React.Fragment>
                {/* <Breadcrumb /> */}
                <Forum posts={this.props.posts} />
                <NewTopic />
                {/* <Login /> */}
            </React.Fragment>
        );
    }
}

export default App;

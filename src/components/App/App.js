import React, { Component } from "react";
import "./App.css";

import Forum from "../forum/Forum";

class App extends Component {
    componentDidMount() {
        this.props.requestData();
    }

    render() {
        return (
            <React.Fragment>
                {/* <Breadcrumb /> */}
                <Forum posts={this.props.posts} loading={this.props.loading} />
                {/* <NewTopic /> */}
                {/* <Login /> */}
            </React.Fragment>
        );
    }
}

export default App;

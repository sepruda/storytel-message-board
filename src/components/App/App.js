import React, { Component } from "react";
import "./App.css";

import Forum from "../forum/Forum";
import NewTopic from "../../components/forum/NewTopic";

class App extends Component {
    // componentDidMount() {
    //     this.props.requestData();
    // }

    render() {
        return (
            <React.Fragment>
                {/* <Breadcrumb /> */}
                <Forum posts={this.props.posts} loading={this.props.loading} />
                <NewTopic
                    post={this.props.post}
                    postDataHandler={this.props.postDataHandler}
                />
                {/* <Login /> */}
            </React.Fragment>
        );
    }
}

export default App;

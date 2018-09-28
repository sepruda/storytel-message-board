import React, { Component } from "react";

import ForumHeader from "./ForumHeader";
import ForumBody from "./ForumBody/ForumBody";

class Forum extends Component {
    render() {
        return (
            <React.Fragment>
                <ForumHeader />
                <ForumBody posts={this.props.posts} />
            </React.Fragment>
        );
    }
}

export default Forum;

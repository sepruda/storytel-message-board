import React, { Component } from "react";

import ForumHeader from "./ForumHeader";
import ForumBody from "./ForumBody/ForumBody";
import Loader from "../UI/Loader/Loader";

class Forum extends Component {
    render() {
        return (
            <React.Fragment>
                <ForumHeader />
                {this.props.loading ? (
                    <Loader />
                ) : (
                    <ForumBody posts={this.props.posts} />
                )}
            </React.Fragment>
        );
    }
}

export default Forum;

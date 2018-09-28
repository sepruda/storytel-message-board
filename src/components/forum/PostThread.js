import React, { Component } from "react";

class PostThread extends Component {
    render() {
        return <h1>{this.props.post.title}</h1>;
    }
}

export default PostThread;

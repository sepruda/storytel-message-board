import React, { Component } from "react";

import ForumBody from "./ForumBody/ForumBody";
import Loader from "../UI/Loader/Loader";

class Forum extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.loading ? (
                    <Loader />
                ) : (
                    <ForumBody
                        messages={this.props.messages}
                        editMessageHandler={this.props.editMessageHandler}
                        deleteMessage={this.props.deleteMessage}
                    />
                )}
            </React.Fragment>
        );
    }
}

export default Forum;

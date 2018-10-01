import React, { Component } from "react";
import "./App.css";

import Forum from "../forum/Forum";
import NewTopic from "../../components/forum/NewTopic";

class App extends Component {
    state = {
        message: ""
    };

    handleMessageChange = event => {
        this.setState({
            message: event
        });
    };

    resetState = () => {
        this.setState({ message: "" });
    };

    createMessageHandler = event => {
        event.preventDefault();
        const data = {
            message: this.state.message
        };
        this.resetState();
        this.props.postDataHandler(data);
    };

    editMessageHandler = (id, author, message) => {
        this.props.setIdEditedMessage(id);
        if (!this.props.selectedMessage) {
            this.setState({ message: message });
        } else {
            this.setState({ message: "" });
        }
    };

    componentDidMount() {
        this.props.requestData();
    }

    render() {
        return (
            <React.Fragment>
                {/* <Breadcrumb /> */}
                <Forum
                    messages={this.props.messages}
                    loading={this.props.loading}
                    editMessageHandler={this.editMessageHandler}
                />
                <NewTopic
                    messages={this.props.messages}
                    submitMessage={this.createMessageHandler}
                    selectedMessage={this.props.selectedMessage}
                    handleChange={this.handleMessageChange}
                    messageBody={this.state.message}
                    clear={this.resetState}
                />
                {/* <Login /> */}
            </React.Fragment>
        );
    }
}

export default App;

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
        let authorId = 0;
        if (!localStorage.getItem("author")) {
            authorId = Math.floor(Math.random() * 1000);
            localStorage.setItem("author", authorId);
        } else {
            authorId = localStorage.getItem("author");
        }
        const data = {
            message: this.state.message,
            author: authorId,
            key: Date.now()
        };
        this.resetState();
        this.props.postDataHandler(data);
    };

    editMessageHandler = (id, message) => {
        this.props.setIdEditedMessage(id);
        if (!this.props.selectedMessage) {
            this.setState({ message: message });
        } else {
            this.resetState();
        }
    };

    editMessage = event => {
        event.preventDefault();
        const id = this.props.selectedMessage;
        const editedMessage = this.props.messages.find(
            message => message.id === id
        );
        const data = { message: this.state.message };
        console.log(data);

        this.editMessageHandler();
        this.props.putMessageHandler(data, id);
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
                    deleteMessage={this.props.destroyMessageHandler}
                />
                <NewTopic
                    messages={this.props.messages}
                    submitMessage={this.createMessageHandler}
                    selectedMessage={this.props.selectedMessage}
                    handleChange={this.handleMessageChange}
                    messageBody={this.state.message}
                    clear={this.resetState}
                    submitEditedMessage={this.editMessage}
                />
                {/* <Login /> */}
            </React.Fragment>
        );
    }
}

export default App;

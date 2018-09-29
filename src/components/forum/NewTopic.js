import React, { Component } from "react";

class NewTopic extends Component {
    state = {
        title: "",
        body: ""
    };

    resetState = () => {
        this.setState({ title: "", body: "" });
    };

    createMessageHandler = event => {
        event.preventDefault();
        const data = {
            title: this.state.title,
            body: this.state.body
        };
        this.resetState();
        this.props.postDataHandler(data);
    };

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <h2 className="h4 text-white bg-info mb-3 p-4 rounded">
                        Create new message
                    </h2>
                    <form className="mb-3">
                        <div className="form-group">
                            <label htmlFor="subject">Subject:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.subject}
                                onChange={event =>
                                    this.setState({
                                        title: event.target.value
                                    })
                                }
                                id="subject"
                                placeholder="Give your message a subject."
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                className="form-control"
                                id="message"
                                value={this.state.message}
                                onChange={event =>
                                    this.setState({
                                        body: event.target.value
                                    })
                                }
                                rows="10"
                                placeholder="Write your message here."
                                required
                            />
                        </div>
                        <button
                            onClick={e => this.createMessageHandler(e)}
                            className="btn btn-primary"
                        >
                            Create message
                        </button>
                        <button
                            type="reset"
                            className="btn btn-danger"
                            onClick={this.resetState}
                        >
                            Reset
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewTopic;

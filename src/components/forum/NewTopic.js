import React, { Component } from "react";

class NewTopic extends Component {
    //Can be change to functional component
    resetAuthor = () => {
        localStorage.removeItem("author");
    };

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <h2 className="h4 text-white bg-info mb-3 p-4 rounded">
                        {this.props.selectedMessage
                            ? "Edit message"
                            : "Create new message"}
                    </h2>
                    <form className="mb-3">
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                className="form-control"
                                id="message"
                                value={this.props.messageBody}
                                onChange={event =>
                                    this.props.handleChange(event.target.value)
                                }
                                rows="10"
                                placeholder="Write your message here."
                                required
                            />
                        </div>
                        {this.props.selectedMessage ? (
                            <button
                                onClick={this.props.submitEditedMessage}
                                className="btn btn-primary"
                            >
                                Update message
                            </button>
                        ) : (
                            <button
                                onClick={this.props.submitMessage}
                                className="btn btn-primary"
                            >
                                Create message
                            </button>
                        )}

                        <button
                            type="reset"
                            className="btn btn-danger"
                            onClick={this.props.clear}
                        >
                            Clear
                        </button>
                        <button
                            className="btn btn-info float-right"
                            onClick={this.resetAuthor}
                        >
                            New author
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewTopic;

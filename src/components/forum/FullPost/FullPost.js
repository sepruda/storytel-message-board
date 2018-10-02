import React, { Component } from "react";

import "./FullPost.css";

class FullPost extends Component {
    render() {
        const message = this.props.messages.find(
            message => message.id === parseInt(this.props.match.params.id, 10)
        );

        return (
            <div className="row">
                <div className="col-12">
                    <h1 className="h2 text-white bg-info mb-0 p-4 rounded-top">
                        Storytel Message Board
                    </h1>
                    <table className="table table-striped table-bordered table-responsive-lg">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Message</th>
                                <th scope="col">Author</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="col-10">
                                    <p className="messageBody">
                                        {message.message}
                                    </p>
                                </td>
                                <td>{message.author}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default FullPost;

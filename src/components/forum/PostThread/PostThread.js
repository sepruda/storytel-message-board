import React, { Component } from "react";

import "./PostThread.css";

class PostThread extends Component {
    state = {
        message: ""
    };

    render() {
        const message = this.props.messages.find(
            message => message.id === parseInt(this.props.match.params.id, 10)
        );

        return (
            <div className="row">
                <div className="col-12">
                    <h2 className="h4 text-white bg-info mb-0 p-4 rounded-top" />
                    <table className="table table-striped table-bordered table-responsive-lg">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col" className="col-2">
                                    Message
                                </th>
                                <th scope="col" className="col-10">
                                    Author
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <p>{message.message}</p>
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

export default PostThread;

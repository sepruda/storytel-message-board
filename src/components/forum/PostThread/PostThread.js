import React, { Component } from "react";

import "./PostThread.css";
import { requestData } from "../../../redux/actions/action_creators";

class PostThread extends Component {
    componentDidMount() {
        if (this.props.post) console.log(this.props.requestData);
    }

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <h2 className="h4 text-white bg-info mb-0 p-4 rounded-top">
                        {this.props.post.title}
                    </h2>
                    <table className="table table-striped table-bordered table-responsive-lg">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Author</th>
                                <th scope="col">Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="author-col" />
                                <td className="post-col">
                                    <div>
                                        <span className="font-weight-bold">
                                            Post subject:
                                        </span>{" "}
                                        {this.props.post.title}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <span className="font-weight-bold">
                                            Posted By:
                                        </span>
                                        <br />
                                        {this.props.post.userId}
                                    </div>
                                    <div>
                                        <span className="font-weight-bold">
                                            Posted:
                                        </span>
                                        <br />
                                        {this.props.post.date}
                                    </div>
                                </td>
                                <td>
                                    <p>{this.props.post.body}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default PostThread;

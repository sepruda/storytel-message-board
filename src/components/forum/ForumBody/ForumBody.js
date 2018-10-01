import React from "react";

import "./ForumBody.css";
import ForumPost from "../ForumPost";

const forumBody = props => {
    return (
        <div className="row">
            <div className="col-12">
                <h1 className="h2 text-white bg-info mb-0 p-4 rounded-top">
                    Storytel Message Board
                </h1>
                <table className="table table-striped table-bordered table-responsive-lg">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col" className="message-col col-8">
                                Message
                            </th>
                            <th scope="col" className="col-2">
                                Author
                            </th>
                            <th scope="col" className="col-1">
                                Edit
                            </th>
                            <th scope="col" className="col-1">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.messages.map(message => {
                            return (
                                <ForumPost
                                    id={message.id}
                                    key={message.id}
                                    author={message.author}
                                    message={message.message}
                                    editMessageHandler={
                                        props.editMessageHandler
                                    }
                                />
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default forumBody;

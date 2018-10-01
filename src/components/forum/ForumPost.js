import React from "react";

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

const forumPost = props => {
    const TruncateMessage = message =>
        message.length > 50 ? message.substr(0, 50) + "..." : message;
    return (
        <React.Fragment>
            <tr>
                <td>
                    <h6>
                        <Link to={`/messages/${props.id}`}>
                            {TruncateMessage(props.message)}
                        </Link>
                    </h6>
                </td>
                <td>
                    <div>{props.author}</div>
                </td>
                <td>
                    <button
                        className="btn btn-small btn-info"
                        onClick={e =>
                            props.editMessageHandler(
                                props.id,
                                props.author,
                                props.message
                            )
                        }
                    >
                        Edit
                    </button>
                </td>
                <td>Delete</td>
            </tr>
        </React.Fragment>
    );
};

export default forumPost;

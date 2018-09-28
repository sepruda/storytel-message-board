import React from "react";

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

const forumPost = props => {
    return (
        <React.Fragment>
            <tr>
                <td>
                    <h6>
                        <Link to={`/posts/${props.id}`}>{props.subject}</Link>
                    </h6>
                </td>
                <td>
                    <div>
                        by{" "}
                        <a href={`/users/${props.author}/posts`}>
                            {props.author}
                        </a>
                    </div>
                    <div>{props.date}</div>
                </td>
                <td>
                    <div>5 replies</div>
                </td>
                <td>
                    <div>
                        by <a href="#">Author name</a>
                    </div>
                    <div>05 Apr 2017, 20:07</div>
                </td>
            </tr>
        </React.Fragment>
    );
};

export default forumPost;

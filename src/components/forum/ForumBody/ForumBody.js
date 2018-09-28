import React from "react";

import "./ForumBody.css";
import ForumPost from "../ForumPost";

const forumBody = props => {
    let date = props.date;
    if (!props.date) {
        date = new Date().toLocaleString();
    }
    return (
        <div className="row">
            <div className="col-12">
                <h1 className="h2 text-white bg-info mb-0 p-4 rounded-top">
                    Storytel Message Board
                </h1>
                <table className="table table-striped table-bordered table-responsive-lg">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col" className="topic-col">
                                Subject
                            </th>
                            <th scope="col" className="created-col">
                                Created
                            </th>
                            <th scope="col">Statistics</th>
                            <th scope="col" className="last-post-col">
                                Last post
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.posts.map(post => {
                            return (
                                <ForumPost
                                    id={post.id}
                                    key={post.id}
                                    subject={post.title}
                                    author={post.userId}
                                    message={post.body}
                                    date={post.date}
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

import React from "react";

import "./ForumBody.css";

const forumBody = props => (
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
          <tr>
            <td>
              <h6>
                <a href="post.html">
                  Forum post title with a complex and long question
                </a>
              </h6>
            </td>
            <td>
              <div>
                by <a href="#">Author name</a>
              </div>
              <div>03 Apr 2017, 13:46</div>
            </td>
            <td>
              <div>5 replies</div>
              <div>179 views</div>
            </td>
            <td>
              <div>
                by <a href="#">Author name</a>
              </div>
              <div>05 Apr 2017, 20:07</div>
            </td>
          </tr>
          <tr>
            <td>
              <h6>
                <a href="post.html">
                  Forum post title with a complex and long question
                </a>
              </h6>
            </td>
            <td>
              <div>
                by <a href="#">Author name</a>
              </div>
              <div>03 Apr 2017, 13:46</div>
            </td>
            <td>
              <div>5 replies</div>
              <div>179 views</div>
            </td>
            <td>
              <div>
                by <a href="#">Author name</a>
              </div>
              <div>05 Apr 2017, 20:07</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default forumBody;

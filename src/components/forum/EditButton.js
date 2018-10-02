import React from "react";

const editButton = props => (
    <button
        className="btn btn-small btn-info"
        onClick={e => props.editMessageHandler(props.id, props.message)}
    >
        Edit
    </button>
);

export default editButton;

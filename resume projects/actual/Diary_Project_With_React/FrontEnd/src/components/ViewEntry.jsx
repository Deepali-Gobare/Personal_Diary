import React from "react";

const ViewEntry = ({ post, goBack }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>
        <strong>Date:</strong> {new Date(post.date).toLocaleDateString()}
      </p>
      <button className="btn btn-primary" onClick={goBack}>
        Back to Entries
      </button>
    </div>
  );
};

export default ViewEntry;

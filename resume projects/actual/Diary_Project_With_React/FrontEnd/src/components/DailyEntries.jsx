import React from "react";

const DailyEntries = ({ posts, deletePost, startUpdate, openPost }) => {
  return posts.length > 0 ? (
    <ul className="list-group">
      {posts.map((post, index) => (
        <li
          key={post._id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <div>
            <h5
              style={{ cursor: "pointer", color: "blue" }}
              onClick={() => openPost(post)}
            >{` ${post.title}`}</h5>
          </div>
          <div>
            <button
              className="btn btn-secondary btn-sm me-2"
              onClick={() => startUpdate(post)}
            >
              Update
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deletePost(post._id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <p>No entries available.</p>
  );
};

export default DailyEntries;

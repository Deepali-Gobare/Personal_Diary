import React, { useState, useEffect } from "react";

const CreateEntry = ({ createPost, updatePost, updatingPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (updatingPost) {
      setTitle(updatingPost.title);
      setContent(updatingPost.content);
    }
  }, [updatingPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (updatingPost) {
      console.log(`Updating entry: ${title}`);
      updatePost(updatingPost._id, title, content);
    } else {
      console.log(`Creating new entry: ${title}`);
      createPost(title, content);
    }
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Content</label>
        <textarea
          className="form-control"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {updatingPost ? "Update Entry" : "Create Entry"}
      </button>
    </form>
  );
};

export default CreateEntry;

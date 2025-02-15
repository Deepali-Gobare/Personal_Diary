import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import DailyEntries from "./components/DailyEntries";
import CreateEntry from "./components/CreateEntry";
import ViewEntry from "./components/ViewEntry";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [view, setView] = useState("dailyEntries");
  const [updatingPost, setUpdatingPost] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("/api/posts");
      console.log("Fetched posts:", response.data);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const createPost = async (title, content) => {
    try {
      await axios.post("/api/posts", { title, content });
      console.log("Post created successfully");
      fetchPosts();
      setView("dailyEntries");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const updatePost = async (postId, title, content) => {
    try {
      await axios.put(`/api/posts/${postId}`, { title, content });
      console.log("Post updated successfully");
      fetchPosts();
      setUpdatingPost(null);
      setView("dailyEntries");
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const deletePost = async (postId) => {
    try {
      await axios.delete(`/api/posts/${postId}`);
      console.log("Post deleted successfully");
      fetchPosts();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const startUpdate = (post) => {
    console.log(`Starting update for post: ${post.title}`);
    setUpdatingPost(post);
    setView("createEntry");
  };

  const openPost = (post) => {
    console.log(`Opening post: ${post.title}`);
    setSelectedPost(post);
    setView("viewEntry");
  };

  const goBack = () => {
    console.log("Navigating back to entries list");
    setSelectedPost(null);
    setView("dailyEntries");
  };

  return (
    <div className="container mt-5">
      <Navbar setView={setView} view={view} />
      {view === "dailyEntries" && (
        <DailyEntries
          posts={posts}
          deletePost={deletePost}
          startUpdate={startUpdate}
          openPost={openPost}
        />
      )}
      {view === "createEntry" && (
        <CreateEntry
          createPost={createPost}
          updatePost={updatePost}
          updatingPost={updatingPost}
        />
      )}
      {view === "viewEntry" && selectedPost && (
        <ViewEntry post={selectedPost} goBack={goBack} />
      )}
    </div>
  );
};

export default App;

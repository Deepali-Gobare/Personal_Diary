import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

// Initialize Express
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // To handle JSON requests
app.use(express.static("public"));

// Connect to MongoDB
async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://jjjames463:I4FckwCA6YoZZuZe@cluster0.6eh5t.mongodb.net/blogDB?retryWrites=true&w=majority",
      {}
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

// Define Post Schema and Model
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Post = mongoose.model("Post", postSchema);

// Routes
app.get("/api/posts", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Error fetching posts" });
  }
});

app.post("/api/posts", async (req, res) => {
  const { title, content } = req.body;
  const post = new Post({ title, content });

  try {
    await post.save();
    res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Error creating post" });
  }
});

app.delete("/api/posts/:postId", async (req, res) => {
  const { postId } = req.params;

  try {
    await Post.findByIdAndDelete(postId);
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ message: "Error deleting post" });
  }
});

app.put("/api/posts/:postId", async (req, res) => {
  const { postId } = req.params;
  const { title, content } = req.body;

  try {
    await Post.findByIdAndUpdate(postId, { title, content });
    res.json({ message: "Post updated successfully" });
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).json({ message: "Error updating post" });
  }
});

app.get("/api/posts/:postId", async (req, res) => {
  const { postId } = req.params;

  try {
    const post = await Post.findById(postId);
    res.json(post);
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).json({ message: "Error fetching post" });
  }
});

// Start server
app.listen(3000, async () => {
  await connectDB();
  console.log("Server started on port 3000");
});

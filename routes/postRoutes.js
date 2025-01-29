const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

// Create Post
router.post("/", async (req, res) => {
    try {
        const { title, content } = req.body;
        const post = new Post({ title, content });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get All Posts
router.get("/", async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

// Update Post
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete Post
router.delete("/:id", async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Post deleted" });
});

module.exports = router;

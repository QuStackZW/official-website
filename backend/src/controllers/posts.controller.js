import BlogPosts from "../models/blog.model.js";
import express from "express";

const router = express.Router();

export const getPosts = async (req, res) => {
  try {
    const posts = await BlogPosts.find();

    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const { title, author, content, created, updated, image, tags } = req.body;

  const newPost = new BlogPosts({
    title,
    author,
    content,
    created,
    updated,
    image,
    tags,
  });

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export default router;

import BlogPosts from "../models/posts.model.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await BlogPosts.find();

    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json("Error: " + error);
  }
};

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new BlogPosts(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json("Error: " + error);
    }
        
    }

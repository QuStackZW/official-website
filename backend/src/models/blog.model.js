import mongoose from "mongoose";
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
    tags: [{ type: String }],
    image: { type: String },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  {
    timestamps: true,
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
  }
);

const BlogPosts = mongoose.model("Blog", blogSchema);

export default BlogPosts;

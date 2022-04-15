import axios from "axios";

const url = "http://localhost:27017/blog";

export const fetchPosts = () => axios.get(url);

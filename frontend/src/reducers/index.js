import postsReducer from "./posts";
import { combineReducers } from "redux"; // eslint-disable-line

const allReducers = combineReducers({
  posts: postsReducer,
});

export default allReducers;

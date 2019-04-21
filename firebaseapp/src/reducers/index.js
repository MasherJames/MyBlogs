import { combineReducers } from "redux";
import AddBlogReducer from "./AddBlogReducer";
import { firestoreReducer } from "redux-firestore";

export default combineReducers({
  blogs: AddBlogReducer,
  firestore: firestoreReducer
});

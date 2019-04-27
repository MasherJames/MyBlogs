import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import Blog from "./Blog";

class Blogs extends Component {
  render() {
    const { blogs } = this.props;
    return (
      <div>
        {blogs &&
          blogs.map(blog => (
            <Link to={`/blog/${blog.id}`} key={blog.id}>
              <Blog blog={blog} />
            </Link>
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  blogs: state.firestore.ordered.blogs
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "blogs" }])
)(Blogs);

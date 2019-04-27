import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import moment from "moment";

class SingleBlog extends Component {
  render() {
    const { blog } = this.props;
    return (
      <div>
        <p>{blog.title}</p>
        <p>{blog.content}</p>
        <p>{moment(blog.createdAt.toDate()).calendar()}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const blog = state.firestore.data.blogs[id];
  return {
    blog: blog
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "blogs" }])
)(SingleBlog);

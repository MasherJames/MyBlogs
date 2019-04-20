import React, { Component } from "react";
import { connect } from "react-redux";
import addBlogAction from "../actions/AddBlogActions";

class AddBlog extends Component {
  state = {
    title: "",
    content: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addBlogAction(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="new-blog">
        <h3 className="new-blog-title">Publish a New Blog</h3>
        <form onSubmit={this.handleSubmit} className="add-new-blog">
          <input
            type="text"
            className="blog-input"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Enter title"
          />
          <input
            type="text"
            name="content"
            className="blog-input"
            value={this.state.content}
            onChange={this.handleChange}
            placeholder="Enter content"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { addBlogAction }
)(AddBlog);

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        <div className="main-link">
          <Link to="/">Blogs</Link>
        </div>
        <div className="auth-links">
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    );
  }
}
export default Nav;

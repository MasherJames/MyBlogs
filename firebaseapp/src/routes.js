import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import AddBlog from "./components/AddBlog";
import Blogs from "./components/Blogs";
import Landing from "./components/Landing.js";
import NotFound from "./components/NotFound";
import SingleBlog from "./components/SingleBlog"

export default () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/create-blog" component={AddBlog} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/blog/:id" component={SingleBlog} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

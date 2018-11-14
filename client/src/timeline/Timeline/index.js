import React from "react";
import { connect } from "react-redux";

import Post from "./Post";

import posts from "./posts";

// eslint-disable-next-line react/prefer-stateless-function
class Timeline extends React.Component {
  render() {
    return (
      <div className="columns">
        <div className="column is-one-quarter" />
        <div className="column">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
        <div className="column is-one-quarter" />
      </div>
    );
  }
}

export default connect()(Timeline);

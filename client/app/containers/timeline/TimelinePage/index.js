import React from "react";
import { connect } from "react-redux";

import Post from "./Post";

import posts from "./posts";

// eslint-disable-next-line react/prefer-stateless-function
class Timeline extends React.Component {
  render() {
    return (
      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

const connectedTimelinePage = connect()(Timeline);
export { connectedTimelinePage as TimelinePage };

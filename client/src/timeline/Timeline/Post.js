import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import styled from "styled-components";

const StyledPost = styled.article`
  margin: 0.75rem 0;
`;

const Post = (props) => {
  const { post } = props;
  return (
    <StyledPost className="media box is-shadowed">
      <figure className="media-left">
        <p className="image is-64x64">
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>@{post.user.username}</strong>{" "}
            <small>{moment(post.updatedAt).fromNow()}</small>
            <br />
            {post.content}
          </p>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <a className="level-item" href="/">
              <span className="icon is-small">
                <i className="fas fa-reply" />
              </span>
            </a>
            <a className="level-item" href="/">
              <span className="icon is-small">
                <i className="fas fa-retweet" />
              </span>
            </a>
            <a className="level-item" href="/">
              <span className="icon is-small">
                <i className="fas fa-heart" />
              </span>
            </a>
          </div>
        </nav>
      </div>
    </StyledPost>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    user: PropTypes.shape({
      username: PropTypes.string
    }),
    content: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string
  })
};

export default Post;

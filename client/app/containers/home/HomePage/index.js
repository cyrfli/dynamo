import React from "react";
import styled from "styled-components";

import Item from "./Item";

const StyledTitle = styled.div`
  margin-bottom: 5rem !important;
`;

export const HomePage = () => (
  <div className="hero">
    <StyledTitle className="intro title has-text-centered">
      Dynano allows you to manage the progress of your projects or your daily
      tasks. That is also a social network that focuses on motivation and allows
      you to share your progress.
    </StyledTitle>
    <div className="columns has-text-centered">
      <Item>
        <div className="icon is-large has-text-danger">
          <i className="fas fa-boxes fa-2x" />
        </div>
        <div className="description">
          Organise your tasks into <strong>projects</strong>
        </div>
      </Item>
      <Item>
        <div className="icon is-large has-text-success">
          <i className="fas fa-tasks fa-2x" />
        </div>
        <div className="description">
          Have unique or recurring <strong>tasks</strong>
        </div>
      </Item>
      <Item>
        <div className="icon is-large has-text-info">
          <i className="fas fa-thumbs-up fa-2x" />
        </div>
        <div className="description">
          <strong>Share</strong> your progress and stay motivated
        </div>
      </Item>
      <Item>
        <div className="icon is-large has-text-warning">
          <i className="fas fa-trophy fa-2x" />
        </div>
        <div className="description">
          You’re getting <strong>achievements</strong>
        </div>
      </Item>
    </div>
  </div>
);

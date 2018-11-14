import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import NavbarMenu from "./NavbarMenu";

const MenuUser = (props) => {
  const { user } = props;
  return (
    <NavbarMenu id="navbar-dynamo" className="navbar-menu">
      <div className="navbar-start">
        <Link className="navbar-item" to="/timeline">
          <div style={{ position: "relative" }}>
            <span className="icon is-medium">
              <i className="fas fa-home" />
            </span>
            <span>Timeline</span>
          </div>
        </Link>

        <div className="navbar-item has-dropdown is-hoverable">
          <div className="navbar-link">
            <div style={{ position: "relative" }}>
              <span className="icon is-medium">
                <i className="fas fa-briefcase" />
              </span>
              <span>My dynamo</span>
            </div>
          </div>
          <div className="navbar-dropdown">
            <Link className="navbar-item" to="/projects">
              <div style={{ position: "relative" }}>
                <span className="icon is-medium">
                  <i className="fas fa-boxes" />
                </span>
                <span>Projects</span>
              </div>
            </Link>
            <Link className="navbar-item" to="/projects">
              <div style={{ position: "relative" }}>
                <span className="icon is-medium">
                  <i className="fas fa-tasks" />
                </span>
                <span>Tasks</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item has-dropdown is-hoverable">
          <div className="navbar-link">
            <div style={{ position: "relative" }}>
              <span className="icon is-medium">
                <i className="fas fa-user" />
              </span>
              <span>{user.username}</span>
            </div>
          </div>
          <div className="navbar-dropdown is-right">
            <Link className="navbar-item" to="/projects">
              <div style={{ position: "relative" }}>
                <span className="icon is-medium">
                  <i className="fas fa-id-card" />
                </span>
                <span>Profile</span>
              </div>
            </Link>
            <Link className="navbar-item" to="/logout">
              <div style={{ position: "relative" }}>
                <span className="icon is-medium">
                  <i className="fas fa-sign-out-alt" />
                </span>
                <span>Logout</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </NavbarMenu>
  );
};

MenuUser.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    token: PropTypes.string,
    age: PropTypes.number,
    gender: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string
  })
};

export default MenuUser;

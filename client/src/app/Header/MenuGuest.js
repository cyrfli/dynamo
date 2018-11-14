import React from "react";
import { Link } from "react-router-dom";
import NavbarMenu from "./NavbarMenu";

const MenuGuest = () => (
  <NavbarMenu id="navbar-dynamo" className="navbar-menu">
    <div className="navbar-start">
      <Link className="navbar-item" to="/">
        <div style={{ position: "relative" }}>
          <span className="icon is-medium">
            <i className="fas fa-home" />
          </span>
          <span>Home</span>
        </div>
      </Link>
    </div>

    <div className="navbar-end">
      <Link className="navbar-item" to="/register">
        <div style={{ position: "relative" }}>
          <span className="icon is-medium">
            <i className="fas fa-user-plus" />
          </span>
          <span>Register</span>
        </div>
      </Link>
      <Link className="navbar-item" to="/login">
        <div style={{ position: "relative" }}>
          <span className="icon is-medium">
            <i className="fas fa-sign-in-alt" />
          </span>
          <span>Login</span>
        </div>
      </Link>
    </div>
  </NavbarMenu>
);

export default MenuGuest;

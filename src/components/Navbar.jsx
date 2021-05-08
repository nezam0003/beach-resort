import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <>
        <nav className="custom-navbar">
          <div className="nav-center">
            <div className="nav-header">
              <NavLink to="/">
                ocean<span className="text-warning">View</span> resort
              </NavLink>
              <button type="button" className="nav-btn">
                <FaAlignRight
                  className="nav-icon"
                  onClick={this.handleToggle}
                />
              </button>
            </div>
            <ul
              className={
                this.state.isOpen
                  ? "custom-nav-links show-nav"
                  : "custom-nav-links"
              }
            >
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/rooms">
                  Rooms
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/contact">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/login">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/registration">
                  Registration
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

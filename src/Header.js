import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Input extends Component {
  render() {
    const todos = {
      background: "black",
      textAlign: "center",
      color: "red",
      height: "50px",
      padding: "12px 10px",
    };
    const linkstyle = {
      color: "white",
      textDecoration: "none",
    };

    return (
      <header style={todos}>
        <h1>TODOLIST </h1>
        <Link style={linkstyle} to="/">
          Home
        </Link>
        |
        <Link style={linkstyle} to="/about">
          About
        </Link>
      </header>
    );
  }
}

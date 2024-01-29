import React from "react";
import { Link } from "react-router-dom";
import "./BlogNav.css";

export const BlogNav = () => {
  return (
    <ul>
      <li>
        <Link to="/">Blog</Link>
      </li>
      <li className="right">
        <Link to="/logout">Logout</Link>
      </li>
      <li className="right">
        <Link to="/login">Login</Link>
      </li>
      <li className="right">
        <Link to="/register">Register</Link>
      </li>
    </ul>
  );
};

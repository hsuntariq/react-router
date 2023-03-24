import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark text-light">
        <div className="nav-brand">
          <img
            style={{ width: "50px", objectFit: "cover" }}
            src="https://cdn.wallpapersafari.com/44/4/YH0VqQ.jpg"
            alt=""
          />
        </div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-items">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-items">
            <a href="/signup" className="nav-link text-light">
              Sign up
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;

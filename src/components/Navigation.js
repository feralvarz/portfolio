import React, { Component } from "react";
import { Link } from "@reach/router";

class Navigation extends Component {
  render() {
    return (
      <header className="row">
        <nav className="navbar navbar-expand-lg navbar-light px-0 w-100">
          <Link to="/" className="nav-link">
            Fernando Alvarez
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav w-100">
              <li className="nav-item ml-auto">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navigation;

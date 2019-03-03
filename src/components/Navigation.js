import React, { Component } from "react";
import { Link } from "@reach/router";

class Navigation extends Component {
  /* constructor(props) {
    super(props);
  } */
  render() {
    return (
      <div
        id="navigation"
        className={"fixed-top" + (!this.props.active ? " active" : "")}
      >
        <header className="container">
          <nav className="navbar navbar-expand-lg navbar-light p-0 w-100">
            <Link to="/" className="">
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
      </div>
    );
  }
}

export default Navigation;

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
            <Link to="/portfolio" className="">
              Fernando Alvarez
            </Link>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/portfolio/about" className="nav-link">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Navigation;

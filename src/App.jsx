import React, { Component } from "react";
import { render } from "react-dom";
import posed, { PoseGroup } from "react-pose";
import "./assets/main.scss";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Home from "./components/Home";
import { Router, Location } from "@reach/router";

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 600, beforeChildren: 1000 },
  exit: { opacity: 0 }
});

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <PoseGroup>
        <RouteContainer key={location.key}>
          <Router location={location}>{children}</Router>
        </RouteContainer>
      </PoseGroup>
    )}
  </Location>
);

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Navigation />
        </div>
        <PosedRouter>
          <Home path="/" />
          <About exact="true" path="/about" />
        </PosedRouter>
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));

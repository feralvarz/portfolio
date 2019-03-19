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
          <Router location={location} basepath="portfolio">
            {children}
          </Router>
        </RouteContainer>
      </PoseGroup>
    )}
  </Location>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: false
    };
  }
  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }
  render() {
    return (
      <div>
        <Navigation active={this.state.isTop} />

        <PosedRouter>
          <Home path="/" scrollActive={this.state.isTop} />
          <About exact="true" path="/about" />
        </PosedRouter>
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));

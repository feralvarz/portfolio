import React, { Component } from "react";
import centric from "../assets/images/work/centricdigital-2.png";
import amm from "../assets/images/work/amitw.png";
import djf from "../assets/images/work/dearjack.png";
import lls from "../assets/images/work/lls.png";
class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="hola row align-items-center">
            <div className="col-6 ">
              <p className="display-4">Welcome.</p>
              <p>
                I am Fernando, a Frontend Developer my goal is provide efficient
                solutions for each particular client.
              </p>
            </div>
          </div>
        </div>
        <div className="work amm">
          <div className="container">
            <div className="content">
              <h2 className="title display-4 mb-4">
                Andrew McMahon in the Wilderness
              </h2>
              <img src={amm} alt="asd" className="img-fluid shadow" />
            </div>
          </div>
        </div>

        <div className="work">
          <div className="container">
            <div className="content">
              <h2 className="title display-4 mb-4">Centric Digital</h2>
              <img src={centric} alt="asd" className="img-fluid shadow" />
            </div>
          </div>
        </div>

        <div className="work lls">
          <div className="container">
            <div className="content">
              <h2 className="title display-4 mb-4">
                The Leukemia & Lymphoma Society®
              </h2>
              <img src={lls} alt="asd" className="img-fluid shadow" />
            </div>
          </div>
        </div>
        <div className="work djf">
          <div className="container">
            <div className="content">
              <h2 className="title display-4 mb-4">Dear Jack Foundation</h2>
              <img src={djf} alt="asd" className="img-fluid shadow" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

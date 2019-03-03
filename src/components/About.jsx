import React, { Component } from "react";
import profile_img from "../assets/images/fernando-alvarez-profile.jpg";

class About extends Component {
  render() {
    return (
      <div className="container about">
        <div className="row vh-100 align-items-center">
          <div className="col-lg-4">
            <img
              className="img-fluid mb-2"
              src={profile_img}
              alt="Fernando Alvarez web developer"
            />

            <div className="row">
              <div className="col">
                <p className="small mb-0">Contact</p>
                <a href="mailto:feralvarz@gmail.com">feralvarz@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <h2 className="border-bottom mb-4 pb-3">About</h2>
            <p>
              In the past 11 years, Fernando was part of a wide range of
              projects from Musicians, Non-profits, Start-ups, and Corporations
              being the use of best practices and the latest tools the base of
              his work process.
            </p>
            <p>
              Fernando works as Frontend web developer and if is required as UI
              designer.{" "}
            </p>
            <p>
              He believes in projects that he is passionate about, always
              providing a direct benefit for his clients.
            </p>

            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-12">
                    Skills
                    <p className="small">
                      CSS3, HTML5, Javascript, React, Angular, Wordpress,
                      Highcharts, D3.js, Bootstrap, Adobe Suite, Sketch,
                      Responsive Web Design, Responsive Web Development, UI
                      Development.
                    </p>
                  </div>

                  <div className="col-12">
                    Clients
                    <p className="small">
                      AIG®, Kaiser Permanente® , Humana™, The Leukemia &
                      Lymphoma Society®, Andrew McMahon in the Wilderness,
                      Dearjack Foundation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

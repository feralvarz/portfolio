import React, { Component } from "react";
import profile_img from "../assets/images/fernando-alvarez-profile.jpg";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="container h-100">
          <div className="content h-100">
            <div className="row h-100 align-items-center">
              <div className="col-lg-10 mx-auto">
                <div className="row mb-4">
                  <div className="col-lg-5 col-xl-3">
                    <img
                      className="img-fluid mb-2 shadow"
                      src={profile_img}
                      alt="Fernando Alvarez web developer"
                    />
                  </div>

                  <div className="col-lg-5 col-xl-4 pl-4 soffset-lg-1">
                    <h2 className="h5">About</h2>
                    <p>
                      In the past 11 years, Fernando was part of a wide range of
                      projects from Musicians, Non-profits, Start-ups, and
                      Corporations being the use of best practices and the
                      latest tools the base of his work process.
                    </p>

                    <p>
                      He believes in projects that he is passionate about,
                      always providing a direct benefit for his clients.
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-8">
                    <div className="row">
                      <div className="col">
                        <h2 className="h6 mb-1">Skills</h2>
                        <p className="small">
                          CSS3, HTML5, Javascript, React, Angular, Wordpress,
                          Highcharts, D3.js, Bootstrap, Adobe Suite, Sketch,
                          Responsive Web Design, Responsive Web Development, UI
                          Development.
                        </p>
                      </div>
                      <div className="col">
                        <h2 className="h6 mb-1">Clients</h2>
                        <p className="small">
                          AIG®, Kaiser Permanente® , Humana™, The Leukemia &
                          Lymphoma Society®, Andrew McMahon in the Wilderness,
                          Dearjack Foundation, JD Power.
                        </p>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>

                <p className="small mb-0">
                  <strong className="mr-1">Contact: </strong>
                  <a href="mailto:feralvarz@gmail.com" target="_blank">
                    feralvarz@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

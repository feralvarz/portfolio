import React, { Component } from "react";
import profile_img from "../assets/images/about.jpg";
import CV from "../downloads/resume-fernando-alvarez-2022.pdf";

class About extends Component {
  render() {
    return (
      <div className="about container">
        <div className="row h-100 align-items-center">
          <div className="col-lg-10 mx-auto">
            <div className="row mb-4">
              <div className="col-md-4 col-lg-5 profile-pic">
                <img
                  className="img-fluid mb-2 shadow"
                  src={profile_img}
                  alt="Fernando Alvarez web developer"
                />
              </div>

              <div className="col col-lg">
                <h2 className="h5">Hello there, this is Fernando!</h2>
                <p>
                  I'm a passionate Web Developer, since 2006 I have been part of
                  a wide range of projects, from Musicians, Nonprofits,
                  Startups, and Corporations.
                </p>

                <p>
                  <a
                    href={CV}
                    download="CV-fernando-alvarez-frontend_dev"
                    className="external cv-link"
                  >
                    Download Resume
                  </a>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-8">
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="h6 mb-1">Frontend</h2>

                    <ul className="small">
                      <li>
                        <b>Frameworks,</b> Angular, ReactJS, Gatsby
                      </li>
                      <li>
                        <b>Reactive programming</b>, RxJS
                      </li>
                      <li>
                        <b>State management</b>, NgRx, Redux
                      </li>
                      <li>
                        <b>Styling</b>, CSS3, Sass, Styled Components, Theme-UI
                      </li>
                      <li>
                        <b>CSS frameworks</b>, Bootstrap, Bulma, Tailwind
                      </li>
                      <li>
                        <b>Web components</b>, Material Design, StencilJS,
                        Theme-UI
                      </li>
                      <li>
                        <b>Charting</b>, AMcharts, D3
                      </li>
                      <li>
                        <b>Tables</b>, AGgrid
                      </li>
                      <li>
                        <b>CMS</b>, Wordpress, Shopify
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-12">
                    <h2 className="h6 mb-1">Other</h2>

                    <ul className="small">
                      <li>
                        <b>Design,</b> UX, UI
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-12">
                    <h2 className="h6 mb-1">Interests</h2>

                    <ul className="small">
                      <li>Meeting new people and culture</li>
                      <li>Learning, Innovation</li>
                      <li>Solving technical problems</li>
                      <li>New programming languages</li>
                      <li>Cycling</li>
                      <li>
                        Spent time with my family <code> !important</code>
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-12">
                    <h2 className="h6 mb-1">Clients</h2>
                    <p className="small">
                      AIG®, Kaiser Permanente® , Humana™, The Leukemia &
                      Lymphoma Society®, Andrew McMahon in the Wilderness,
                      Dearjack Foundation, JD Power, Mosaic.Tech
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

            <p className="small pt-2">
              <small>Fernando Alvarez Portfolio - Made with React</small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

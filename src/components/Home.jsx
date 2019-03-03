import React, { Component } from "react";
import centric from "../assets/images/work/centricdigital-2.png";
import amm from "../assets/images/work/amitw.png";
import djf from "../assets/images/work/dearjack.png";
import lls from "../assets/images/work/lls.png";
import dim from "../assets/images/work/dim.jpg";
import Work from "./Work";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      works: [
        {
          id: "amm",
          title: "Andrew McMahon in the Wilderness",
          img: amm,
          url: "https://www.andrewmcmahon.com/",
          description: "Website built with Wordpress + Shoppify store."
        },
        {
          id: "centric",
          title: "Centric Digital",
          img: centric,
          url: "https://centricdigital.com/",
          description: "Website built with Wordpress."
        },
        {
          id: "lls",
          title: "The Leukemia & Lymphoma Society®",
          img: lls,
          url: "https://www.lls.org/",
          description:
            "HTML markup and styles applying rules from their style guide."
        },
        {
          id: "djf",
          title: "Dear Jack Foundation",
          img: djf,
          url: "http://www.dearjackfoundation.org/",
          description: "Website built with Wordpress."
        },
        {
          id: "dim",
          title: "Dimensions™",
          img: dim,
          url: null,
          description:
            "Web Application, built with Angular 6, Angular Material and D3.js"
        }
      ]
    };
  }
  render() {
    const works = this.state.works;
    return (
      <div>
        <div className="container">
          <div className="hola row align-items-center">
            <div className="col-6 ">
              <p className="display-4">Welcome.</p>
              <p>
                I am Fernando Alvarez, Frontend Developer. My goal is provide
                efficient solutions for each particular client.
              </p>
            </div>
          </div>
        </div>

        {works.map(work => {
          return (
            <Work
              key={"work-" + work.id}
              id={work.id}
              title={work.title}
              img={work.img}
              url={work.url}
              description={work.description}
            />
          );
        })}
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";

class Work extends Component {
  render() {
    const { id, title, img, url, description } = this.props;
    return (
      <div className={"work " + id}>
        <div className="container">
          <div className="content">
            <img
              src={img}
              alt={description}
              className="img-fluid shadow mb-4"
            />

            <h2 className="h5 mb-1">{title}</h2>
            <p className="small">{description}</p>

            {url ? (
              <p className="small mb-2">
                <a href={url} target="_blank" className="external">
                  View Site
                </a>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Work;

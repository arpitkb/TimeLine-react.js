import React from "react";

function Content(props) {
  return (
    <div className="container">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="/proj1/images/Blue.png"
              className="img-fluid rounded-start"
              alt="Image not available"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Title of Date {props.title}</h5>
              <p className="card-text">{props.desc}</p>
              {/* <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;

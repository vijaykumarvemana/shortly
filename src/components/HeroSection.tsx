import Input from "./Input";
import Ishort from '../assets/undraw_link_shortener_mvf6.svg';
import React from "react";

function HeroSection() {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5 position-relative">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6  ">
           <img src={Ishort} alt="Ishort" className="img-fluid ishort" style={{ height: "50%" }}/>
          </div>
          <div className="col-lg-6 hero-contents">
            <h1 className="display-5 fw-bold lh-1 mb-2 fw-bolder">
              More than just
            </h1>
            <h1 className="display-5 fw-bold lh-1 fw-bolder ">shorter links</h1>
            <p className="lead hero-section-description">
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <br />
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-info text-white fw-bold btn-lg px-5 rounded-pill me-md-2 get-started-btn"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
        <Input />
      </div>
    </>
  );
}

export default HeroSection;

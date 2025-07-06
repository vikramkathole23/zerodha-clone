import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row education-section mt-5">
        <div className="col pr-5 mr-3">
          <img className="pb-5" src="\media\education.svg" alt="img" />
        </div>
        <div className="col education-box">
          <h1 className="mb-4">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="pricing-link">
            Varsity <i className="fa-solid fa-arrow-right"></i>
          </a>

          <p>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#" className="pricing-link">
            TradingQ&A <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;

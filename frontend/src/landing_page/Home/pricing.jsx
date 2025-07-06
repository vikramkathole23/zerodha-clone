import React from "react";

function Pricing() {
  return (
    <h1>
      <div className="container mt-4">
        <div className="row mt-5 pt-4">
          <div className="col-5">
            <h2 className="mb-4">Unbeatable pricing</h2>
            <p >
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
            <a href="#" className="pricing-link">
              See pricing <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="col-7">
            <div className="row">
            <div className="pricing-box col mr-2">
              <img className="pricing-img" src="\media\pricingMF.svg" alt="pricingImg" />
             <p> Free account opening</p>
            </div>
            <div className="pricing-box col mr-2">
              <img  className="pricing-img" src="\media\pricingEquity.svg" alt="pricingImg" />
              <div><p> Free equity delivery and direct mutual funds</p></div>
              
            </div>
            <div className="pricing-box col mr-2">
              <img  className="pricing-img" src="\media\intradayTrades.svg" alt="pricingImg" />

              <p> Intraday and F&O</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </h1>
  );
}

export default Pricing;

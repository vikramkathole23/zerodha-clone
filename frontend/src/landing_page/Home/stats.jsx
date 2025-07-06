import React from "react";

function Stats() {
  return (
    <div className="container  mt-5">
      <div className="row mt-5 pt-5 ">
        <div className="col-5 p-4">
          <h1 className="mb-5">Trust with confidence</h1>
          <h4>Customer-first always</h4>
          <p className="text-muted mb-4">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>

          <h4>No spam or gimmicks</h4>
          <p className="text-muted mb-4">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>

          <h4>The Zerodha universe</h4>
          <p className="text-muted mb-4">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h4>Do better with money</h4>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-7 stats-box links">
          <img className="statsImg pt-5" src="\media\ecosystem.png" alt="img" />
          <a className="mr-4 link-1 " href="">
            Explore our products <i className="fa-solid fa-arrow-right"></i>{" "}
          </a>
          <a href="">
            Try Kite demo <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
      <div className="row press-logo mt-5">
        <img
          className="press-logo-1"
          src="\media\pressLogos.png"
          alt="press-logos"
        />
      </div>
    </div>
  );
}

export default Stats;

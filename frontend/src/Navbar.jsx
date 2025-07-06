import React from "react";
import { Link } from "react-router-dom";

import './index.css'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  border-bottom bg-body-tertiary">
        <div className="container p-1">
          <Link className="navbar-brand" to="/">
            <img
              style={{ width: "8rem", margin: "20p" }}
              src="\public\media\logo.svg"
              alt="logo_img"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link
                  className="nav-link active text-muted"
                  aria-current="page"
                  to="/signup"
                >
                  Signup
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active  text-muted" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active  text-muted" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link active  text-muted"
                  aria-disabled="true"
                  to="/pricing"
                >
                  Pricing
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link active  text-muted"
                  aria-disabled="true"
                  to="/support"
                >
                  Support
                </Link>
              </li>
              <li>
                <i className="fa-solid fa-bars"></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

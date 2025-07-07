import React from "react";

function Hero() {
  return (
    <>
      <div className="SignUp-Hero flex">
        <div className="hero-text text-center flex-row mb-5">
          <h1 className="mb-3">Open a free demat and trading account online</h1>
          <h2 className="">
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </h2>
        </div>
        <div className="mt-4 container flex items-center justify-center ">
          <div className="signup-img col-6 mt-4">
            <img
              src="https://zerodha.com/static/images/account_open.svg"
              alt="img"
            />
          </div>
          <div className="signup-form col-5 p-4 ">
              <h1>Signup now</h1>
              <p>Or track your existing application</p>
            <form action="">
              <div class="form-input input-group input-group-lg">
                <span class="input-group-text" id="inputGroup-sizing-lg">
                 +91
                </span>
                <input
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  type="number"
                />    
              </div>

              <button type="button" class="btn btn-primary btn-lg mt-4 border-r-inherit px-5">Get OTP</button>
            </form>
            <p className="term-policy">By proceeding, you agree to the Zerodha terms & privacy policy</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

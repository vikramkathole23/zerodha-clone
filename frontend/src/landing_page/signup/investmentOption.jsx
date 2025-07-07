import React from "react";
import Options from "./options";

function InvestmentOption() {
  return (
    <>
      <div className="investment-option-section">
        <h1>Investment options with Zerodha demat account</h1>
          <div className="investment-option-group">
          <Options img="https://zerodha.com/static/images/stocks-acop.svg" title="Stocks" description="Invest in all exchange-listed securities" />
          <Options img="https://zerodha.com/static/images/mf-acop.svg" title="Mutual funds" description="Invest in commission-free direct mutual funds"/>
          <Options img="https://zerodha.com/static/images/ipo-acop.svg" title="IPO" description="Apply to the latest IPOs instantly via UPI"/>
          <Options img="https://zerodha.com/static/images/fo-acop.svg" title="Futures & options" description="Hedge and mitigate market risk through simplified F&O trading"/>
          </div>
          <button type="button" class="btn btn-primary btn-lg mt-4 border-r-inherit px-5">Explore Investments</button>
      </div>
    </>
  );
}

export default InvestmentOption;

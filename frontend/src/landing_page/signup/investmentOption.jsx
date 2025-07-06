import React from 'react';
import Options from './options';

function InvestmentOption() {
    return ( 
        <>
          <div className="container">
            <h1>Investment options with Zerodha demat account</h1>
            <Options/>
          </div>
        </>
     );
}

export default InvestmentOption;
import React from 'react';

function StepToOpenAccount() {
    return ( 
        <>
          <div className='steps-to-open-account-section container'>
              <h1>Steps to open a demat account with Zerodha</h1>
              <div className="steps-to-open-account ">
                <img src="https://zerodha.com/static/images/steps-acop.svg" alt="step-account image" />
                 <div className='steps-to-open-account-list'>
                    <ol>
                      <li>Enter the requested details</li>
                      <li>Complete e-sign & verification</li>
                      <li>Start investing!</li>
                    </ol>
                 </div>
              </div>
          </div>
        </>
     );
}

export default StepToOpenAccount;
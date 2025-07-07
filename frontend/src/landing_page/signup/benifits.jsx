import React from 'react';
import BenifitsList from './benifitsList';

function Benifits() {
    return ( 
        <>
          <div className="benifits-section">
              <div className="benifits-section-img-box ">
                <img src="https://zerodha.com/static/images/acop-benefits.svg" alt="img" />
                <h1>Benefits of opening a Zerodha demat account</h1>
              </div>
               <div className="benifits-section-discription">
                  <BenifitsList title="Unbeatable pricing" description="Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades."/>
                  <BenifitsList title="Best investing experience" description="Simple and intuitive trading platform with an easy-to-understand user interface."/>
                  <BenifitsList title="No spam or gimmicks" description='Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.'/>
                  <BenifitsList title="The Zerodha universe" description="More than just an app — gain free access to the entire ecosystem of our partner products."/>
               </div>
          </div>
        </>
     );
}

export default Benifits;
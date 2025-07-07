import React from 'react';
import StepToOpenAccount from './stepsToOpenAccount';
import InvestmentOption from './investmentOption';
import Benifits from './benifits';
import FAQs from './faqs';
import AccountType from './accountType';
import Hero from './hero';
import OpenAccount from '../../OpenAccount'

function Signup() {
    return ( 
        <>  
           
           <Hero />
           <InvestmentOption/>
           <StepToOpenAccount/>
           <Benifits/>
           <AccountType/>
           <FAQs/>
           {/* <OpenAccount/> */}
        </>
     );
}

export default Signup;
import React from 'react';
import AccountTypeBox from './accountTypeBox';

function AccountType() {
    return ( 
        <>
           <div className="account-type-section text-center">
             <h1>Explore different account types</h1>
             <div className='container'>
                <div className=" row row-cols-4 gap-4">
                 <AccountTypeBox title='Individual Account' description='Invest in equity, mutual funds and derivatives'/>
                 <AccountTypeBox title='HUF Account' description='Make tax-efficient investments for your family'/>
                 <AccountTypeBox title='NRI Account' description='Invest in equity, mutual funds, debentures, and more'/>
                 <AccountTypeBox title='Minor Account' description='Teach your little ones about money & invest for their future with them '/>
                 <AccountTypeBox title='Corporate / LLP/ Partnership' description='Manage your business surplus and investments easily'/>
                </div>  
             </div>
            </div>
        </>
     );
}

export default AccountType;
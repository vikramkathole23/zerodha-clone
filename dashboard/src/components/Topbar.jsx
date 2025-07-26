import React from 'react';
import TopbarManu from './manu';

function Topbar() {
    return ( 
      <>
        <div className="topbar-container">
          <div className="left-topbar">
            <div className='nifty'>
              <p className='index'>NIFTY 50</p>
              <p className='index-point'>100.2</p>
            </div>
            <div className='sensex'>
              <p className='index'>SENSEX 50</p>
              <p className='index-point'>100.2</p>
            </div>
          </div>
          
            <TopbarManu/>
          
        </div>
      </>
    );
}

export default Topbar;
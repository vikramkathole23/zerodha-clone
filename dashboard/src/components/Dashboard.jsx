import React from 'react';
import { Route, Router, Routes } from "react-router-dom";
import Watchlist from './watchList';
import Summary from './Summary';
import Orders from './Orders';
import Holdings from './Holdings';
import Positions from './Position';
import Funds from './funds';
import Apps from './Apps';


function Dashboard() {
    return ( 
        <>
           <div className="dashboard-container">
              <div className="watchlist">
               <Watchlist/>
              </div>
              <div className="content">
                  <Routes>
                    <Route path="/" element={<Summary />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/holdings" element={<Holdings />} />
                    <Route path="/positions" element={<Positions />} />
                    <Route path="/funds" element={<Funds />} />
                    <Route path="/apps" element={<Apps />} />
                  </Routes>
              </div>
           </div>
           
        </>
     );
}

export default Dashboard;
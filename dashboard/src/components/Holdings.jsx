import React, { useEffect, useState } from 'react';
import { holdings } from '../data';
import { VerticalGraph } from './verticalGraph';
import axios from 'axios'

const labels = holdings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: holdings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };


function Holdings() {

   let [holdingsData,SetholdingData]=useState([])

   useEffect(()=>{
     axios.get('http://localhost:5000/holdings').then((res)=>{
      SetholdingData(res.data);
     }) ;
   },[])

    return ( 

        <>
          <div className="holdings position">
            <h1>Holdings ({holdingsData.length})</h1>
            <table>
              <tr>
              <th className="product">Instrument	</th>
              <th>Qty</th>
              <th>Avg.cost	</th>
              <th className="product">LTP</th>
              <th>Cur. val	</th>
              <th>P&L</th>
              <th>Net chg.	</th>
              <th>Day chg.</th>
            </tr>
            {holdingsData.map((stock, idx) => {
              // Example calculation for current value 
              const currprice = stock.price * stock.qty;
              const Profit= stock.price-stock.avg*stock.qty >=0.0;
              const Profitclass=Profit?"profit":"isloss";
              const dayclass= stock.isLoss?"isloss":"profit";
              return (
                <tr key={stock._id}>
                  <td className="product">{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td className="product">{stock.price.toFixed(2)}</td>
                  <td>{currprice.toFixed(2)}</td>
                  <td className={Profitclass}>{(currprice-stock.avg*stock.qty).toFixed(2)}</td>
                  <td className={Profitclass}>{stock.net}</td>
                  <td className={dayclass}>{stock.day}</td>
                </tr>
              );
            })}
            </table>
                       <div className="investment ">
              <div className=''>
                <p className='Amount'>29,875.</p>
                <p>55</p>
                <p className='T-invest'>Total investment</p>
              </div>
              <div>
                <p className='Amount'>31,428.</p>
                <p>95</p>
                <p className='T-invest'>Current value</p>
              </div>
              <div >
                <p className='Amount'>1,553.40 (+5.20%)</p>
                <p className='T-invest'>P&L</p>
              </div>
            </div>
            <div>
                <VerticalGraph data={data}/>
            </div>
          </div>
        </>
     );
}

export default Holdings;
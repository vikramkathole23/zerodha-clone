import React,{useState,useEffect} from "react";
import axios from 'axios'
// import { positions } from "../data";

function Positions() {
     let [positionData,SetpositionData]=useState([])
  
     useEffect(()=>{
       axios.get('http://localhost:5000/position').then((res)=>{
        SetpositionData(res.data);
       }) ;
     },[])
  
  return (
    <>
      <div className="positions">
        <h1>Positions ({positionData.length})</h1>
        <div className="position-table">
          <table>
            <tr>
              <th className="product">Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th className="product">Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
            {positionData.map((stock) => {
                          // Example calculation for current value 
                          const currprice = stock.price * stock.qty;
                          const Profit= stock.price-stock.avg*stock.qty >=0.0;
                          const Profitclass=Profit?"profit":"isloss";
                          const dayclass= stock.isLoss?"isloss":"profit";
                          return (
                            <tr key={stock._id}>
                              <td className="product">{stock.product}</td>
                              <td>{stock.name}</td>
                              <td>{stock.qty}</td>
                              <td className="product">{stock.price.toFixed(2)}</td>
                              <td>{stock.avg.toFixed(2)}</td>    
                              <td className={Profitclass}>{(currprice-stock.avg*stock.qty).toFixed(2)}</td>
                              <td className={dayclass}>{stock.day}</td>
                            </tr>
                          );
                        })}
           
          </table>
        </div>
      </div>
    </>
  );
}

export default Positions;

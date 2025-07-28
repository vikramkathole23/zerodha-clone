import React, { useState } from 'react';
import { FaAngleUp } from "react-icons/fa";
import { MdOutlineBarChart } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa";

import { Tooltip, Grow } from "@mui/material";

function watchlistStockItems({stocks}) {
    const [watchlistbuttons,setwatchlistbuttons]=useState(false)
    
     const handelmouseEnter =(e)=>{
        setwatchlistbuttons(true)
    }

     const handelmouseLeave =(e)=>{
        setwatchlistbuttons(false)
    }

    return ( 
        <>
           <div className="wishlist-index" onMouseEnter={handelmouseEnter} onMouseLeave={handelmouseLeave}>
                <div className="index-name">
                    <p className={stocks.percent < '0' ? "text-red-500" : "text-green-500"}>{stocks.name}</p>
                </div>
                <div className="index-point">
                    <p>{stocks.percent}</p>
                    <p className={stocks.percent < '0' ? "text-red-500" : "text-green-500"}>{stocks.percent < "0" ? <FaAngleDown />  :<FaAngleUp /> }</p>
                    <p>{stocks.price}</p>
                </div>
                {/* <div className="watchlistoption"> */}
                    <Watchlistoptions watchlistbuttons={watchlistbuttons}/>
                {/* </div> */}
            </div>
        </>
     );
}

  const Watchlistoptions = ({watchlistbuttons, uid }) => {
    return(
       <span className={`actions ${watchlistbuttons==true?'':'hidden'}`} >
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        //   onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <MdOutlineBarChart className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <HiDotsHorizontal className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
        
    );
}

export default watchlistStockItems;
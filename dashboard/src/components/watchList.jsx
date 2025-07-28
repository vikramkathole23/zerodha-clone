import React, {useState} from 'react';


import { watchlist } from '../data';
import WatchlistStockItems from './smallcomponents/watchlistStockItems';

function Watchlist() {
  return ( 
    <>
      <div className="Wishlist-container">
        <div className="search-box border-b border-b-black h-[45px] w-[100%]">
          <input type="text" name='search' placeholder='Search eg:nify,bse.nifty fut weekly,Gold mcx' className='w-[90%] px-4 py-2 focus:outline-none  text-gray-800 placeholder-gray-400'/>
          <span className=' text-gray-400'>{watchlist.length}/20</span>
        </div>
        <div className="wishlist-items-container">
          <div className="wishlist-indexes">
            <ul>
            {watchlist.map((stocks, idx) => (
              <>
                <WatchlistStockItems stocks={stocks} index={idx}/>
              </>
              // <watchlistStockItems stock={stocks} index={idx}/>
            ))}
            </ul>
          </div>
       </div>
      </div>
    </>
  );
}

export default Watchlist;

// const watchlistStockItems=(stocks,index)=>{

// }
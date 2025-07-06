import React from 'react';

function Hero() {
    return ( 
        <div className="container mt-5 ">
            <div className="row imgContainer pt-2 text-center">            
                     <img className='HomeImage  mb-5 pt-2' src=".\media\homeHero.png" alt=" homeImage"  />
                     <h1 className='mb-2 mt-4'>Invest in everything</h1>
                     <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                      <button className='btn btn-primary col-2 p-2 mt-3'>Sign up for free</button>
            </div>
        </div>
     );
}

export default Hero;

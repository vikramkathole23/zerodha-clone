import React from 'react';

function Options(props) {
    return ( 
        <>
           <div className='investment-option'>
                <img src={props.img} />
               <div className="investment-option-datail">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
               </div>
           </div>
        </>
     );
}

export default Options;
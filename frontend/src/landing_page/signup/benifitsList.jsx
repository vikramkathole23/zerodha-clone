import React from 'react';
 
function BenifitsList(props) {
    return ( 
        <>
           <div className='benifits-List'>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
           </div>
        </>
     );
}

export default BenifitsList;
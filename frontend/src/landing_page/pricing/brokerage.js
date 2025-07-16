import React from 'react';
function Brokerage() {
    return ( 
        <div className="container "> 
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-5">
           <a href='' style={{textDecoration:"none"}}><h3 className='fs-5'>Brokerage Calculator</h3></a> 
         <ul style={{textAlign:"left", lineHeight:"2.5"}} className='text-muted fs-6'>
            <li>Call & Trade and RMS auto-squareoff: Additional charges of Rs50 + GST per order.</li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>Physical copies of contract notes,if required, shall be charges Rs.20 per contract note. Courier charges apply.</li>
            <li>For NRI account(non-PIS), 0.55 or Rs.100 per executed order for wquity(whichever is lower).</li>
           <li> For NRI account(PIS), 0.55 or Rs.200 per executed order for wquity(whichever is lower).</li>
           <li> If the account is in debit balance,any order placed will be charges Rs.40 per executed order instead of Rs.20 per executed order.</li>
         </ul>
        </div>
        <div className="col-4 p-5">
        <a href=''style={{textDecoration:"none"}}><h3 className='fs-5'>List of Charges</h3></a> 
        </div>
        
      </div>
    </div>
     );
}

export default Brokerage;
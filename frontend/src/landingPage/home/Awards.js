import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6 p-3'>
                    <img src='media/images/largestBroker.svg' alt='Largest Broker Image' className='mb-5'
                      style={{width:"90%"}}></img>
                </div>
                <div className='col-6 p-3 mt-5'>
                    <h2>Largest Stock Broker in India</h2>
                    <p className='mb-4'>2+ million jerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li className='p-2'>Futures and Options</li>
                                <li className='p-2'>Commodity derivatives</li>
                                <li className='p-2'>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                             <ul>
                                <li className='p-2'>Stocks & IPOs</li>
                                <li className='p-2'>Direct Mutual Funds</li>
                                <li className='p-2'>Bonds & Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' style={{width:"90%"}}></img>
                </div>
            </div>
        </div>
    );
}

export default Awards;
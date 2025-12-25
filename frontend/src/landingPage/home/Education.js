import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5 mb-5 p-3'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/education.svg' style={{width:"70%"}}></img>
                </div>
                <div className='col-6'>
                    <h2 className='mb-4 fs-3'>Free and open market education</h2>
                    <p className='mb-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration: "none"}}>Varsity<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <p className='mb-3 mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{textDecoration: "none"}}>Trading Q&A<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;
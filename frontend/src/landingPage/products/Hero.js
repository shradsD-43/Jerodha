import React from 'react';

function Hero() {
    return (  
        <div className='container p-5  mb-5'>
            <div className='row text-center mb-5 py-5'>
                <h1 className='mt-3 fs-3 mb-3'>Zerodha Products</h1>
                <h3 className='fs-5 mb-4 text-muted'>Sleek, modern, and intuitive trading platforms</h3>
                <p>Check out our <a href='/' style={{textDecoration: "none"}}>investment offerings<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
            </div>
            <hr/>
        </div>
    );
}

export default Hero;
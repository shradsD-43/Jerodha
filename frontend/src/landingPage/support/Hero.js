import React from 'react';

function Hero() {
    return (  
        <section className='container-fluid' id='supportHero'>
            <div className='p-3 pt-5' id='supportWrapper'>
                <h1>Support Portal</h1>
                <a href='' className='hyperLinks'>My Ticket</a>
            </div>
            <div className='row mx-3'>
                <div className='col-6 p-5 mr-2'>
                    <input placeholder="Eg: How do I open my account, How do i activate F&amp;O..."></input>
                    <br />
                    <a href="" className='hyperLinks p-3'>Track account opening</a>
                    <a href="" className='hyperLinks p-3'>Track segment activation</a>
                    <br />
                    <a href="" className='hyperLinks p-3'>Intraday margins</a>
                    <a href="" className='hyperLinks p-3'>Kite user manual</a>
                </div>
                <div className='col-6 p-5'>
                    <h1 className='fs-3'>Featured</h1>
                    <ol type="1">
                        <li><a href="" className='hyperLinks p-3'>Current Takeovers & Delisting - January'24</a></li>
                        <li><a href="" className='hyperLinks p-3'>Latest Intraday Leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;
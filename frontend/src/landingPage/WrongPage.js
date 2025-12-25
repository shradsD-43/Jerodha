import React from 'react';

function WrongPage() {
    return ( 
        <div className='container p-5 text-center'>
            <h3 className='mt-3 mb-4'>Page Not Found</h3>
            <p className='fs-5 text-muted'>Sorry, the page your looking for does not exist!</p>
        </div>
    );
}

export default WrongPage;
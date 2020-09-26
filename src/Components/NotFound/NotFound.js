import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className='text-center notFound'>
                <h3>Sorry This page Not Found.Please try again later .</h3>
                <h1> ERROR 404 !!!</h1>
            </div>
        </div>
    );
};

export default NotFound;
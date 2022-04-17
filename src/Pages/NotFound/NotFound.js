import React from 'react';
import image from '../../images/notfound.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className=' container my-5 mx-auto not-found'>
            <img src={image} alt="" />
        </div>
    );
};

export default NotFound;

import React from 'react';
import thanksImage from '../../images/thanks.png'

const Services = () => {
    return (
        <div>
            <h2 className='text-primary text-center'> Welcome to NS Architect Ltd.</h2>
            <h2 className='text-primary text-center'> Thanks For Booking Me !!! </h2>
            <img className='w-100' src={thanksImage} alt="" />
        </div>
    );
};

export default Services;


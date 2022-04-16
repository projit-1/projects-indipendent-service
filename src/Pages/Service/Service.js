import React from 'react';
import { Button } from 'react-bootstrap';

const Service = (props) => {
    const { pakage, img, comment, comment1, comment2 } = props.service;
    return (
        <div>
            <h2 className='w-100 text-center'>{pakage}</h2>
            <img className='w-100 mx-2 px-2 h-50' src={img} alt="" />
            <p className='w-100 text-center'>{comment}</p>
            <p className='w-100 text-center'>{comment1}</p>
            <p className='w-100 text-center'>{comment2}</p>
            <Button variant="primary w-50 mx-5">Primary</Button>{' '}
        </div>
    );
};

export default Service;
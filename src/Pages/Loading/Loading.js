import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div>

            <div style={{ height: '500px' }} className='w-100 d-flex my-5 justify-content-center align-items-center'>
                <Spinner animation="border" variant="primary" />
            </div>
        </div>
    );
};

export default Loading;
import React from 'react';
import { Button, Form } from 'react-bootstrap';

const SignUp = () => {
    return (
        <div>
            <Form className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name *</Form.Label>
                    <Form.Control type="text" placeholder="Your full name" />
                    <Form.Label>Email address *</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password *</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    <Form.Label>Confirm Password * </Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default SignUp;
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './signIn.css'

const SignIn = () => {
    return (
        <div>
            <Form className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign In
                </Button>
                <p>
                    New to NS Architect Ltd.? <Link className='form-link' to='/signup'>Create an account</Link>
                </p>
            </Form>

            <div className='d-flex w-50 mx-auto'>
                <div className=' sign w-100 '></div>
                <div> <h5>or</h5></div>
                <div className=' sign w-100'></div>
            </div>
            <div className="with-google ">
                <form className='mx-auto my-2'>
                    <Button className='w-50' variant="secondary" size="lg">
                        Start with Google
                    </Button>
                </form>
                <form className='mx-auto'>
                    <Button className='w-50 my-2' variant="secondary" size="lg">
                        Start with Facebook
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
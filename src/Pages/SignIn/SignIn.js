import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './signIn.css'

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const handleEmailBlur = event => {
        setEmail(event.target.value);

    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    if (user) {
        navigate("/services");
    }


    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);

    }

    return (
        <div>
            <h3 className='w-50 mx-auto bg-dark mt-2 text-light py-2 px-5 text-center'>Sign In</h3>
            <Form onSubmit={handleUserSignIn} className='w-50 mx-auto mt-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address *</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password *</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'>{error?.message}</p>
                {
                    loading && <p>Loading ... </p>
                }
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
import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import googleimg from '../../../images/google.png'

const SocialSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>

    }
    if (user) {
        navigate('/home')
    }


    return (
        <div>
            <div className="with-google ">
                <div>

                    <form className='mx-auto my-4'>
                        {errorElement}
                        <Button onClick={() => signInWithGoogle()} className='w-50' variant="secondary" size="lg">  <img className='googleimge' src={googleimg} alt="" />
                            Start with Google
                        </Button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default SocialSignIn;
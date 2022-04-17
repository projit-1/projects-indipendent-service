import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

import bannerimg from '../../images/banner.png'
import Service from '../Service/Service';




const Home = () => {
    const [Services, setServices] = useState([]);
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div >
            <div className='d-flex bg-dark'>
                <div className="banner-text my-5 mx-2 py-2 px-2">
                    <h1 className='text-light'>
                        An-awards winning architect company
                    </h1>
                    <p className='text-light'>Like any great agency, we are only as good as the result we deliver of our recent work</p>
                    <Button variant="primary" >
                        GET STARTED
                    </Button>{ }
                    <hr className='text-light' />
                    <p className='text-light'>If you're hurry, quick call for us. Our supporters alway 24/7 and will help you asap</p>
                </div >
                <div className="banner">
                    <img className='w-100 my-5' src={bannerimg} alt="" />
                </div>
            </div>
            <div id='#servises' className="services ">
                <h2 className='text-center bg-dark text-light mt-1 py-2' >Our Services</h2>
                <div className='row row-cols-3 w-100'>


                    {
                        Services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }

                </div>
            </div>

        </div >


    );
};

export default Home;
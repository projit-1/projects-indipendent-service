
import React from 'react';
import thanksImage from '../../images/thanks.png'

const Services = () => {
    return (
        <div>
            <h2 className='text-primary text-center'> Thanks For Booking Me !!! </h2>
            <img className='w-100' src={thanksImage} alt="" />
        </div>
    );
};

export default Services;

// import React, { useEffect, useState } from 'react';

// const Services = () => {
//     const [Services, setServices] = useState([]);
//     useEffect(() => {
//         fetch("services.json")
//             .then(res => res.json())
//             .then(data => setServices(data))
//     }, [])
//     return (
//         <div>
//             {
//                 Services.map(service => <service
//                     key={service.id}
//                     service={service}
//                 ></service>)
//             }
//         </div>
//     );
// };

// export default Services;
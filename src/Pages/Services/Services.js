import React, { useEffect, useState } from 'react';

const Services = () => {
    const [Services, setServices] = useState([]);
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            {
                Services.map(service => <service
                    key={service.id}
                    service={service}
                ></service>)
            }
        </div>
    );
};

export default Services;
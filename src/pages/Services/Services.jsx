import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from '../../component/ServiceCard';

const Services = () => {
    const [services, setServices]= useState([]);
    useEffect(()=>{
        fetchAllServices()
    },[])
    const fetchAllServices = async()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/services`)
        setServices(data)
    }
    console.log(services);
    return (
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-20'>
            {
                services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
            }
        </div>
    );
};

export default Services;
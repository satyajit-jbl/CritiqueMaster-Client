import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from '../../component/ServiceCard';
import { BiSearch } from 'react-icons/bi';

const Services = () => {
    const [services, setServices] = useState([]);
    const [search, setSearch] = useState("");
    
    useEffect(() => {
        fetchAllServices()
    }, [search])
    const fetchAllServices = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/services?search=${search}`
        )
        setServices(data)
    }
    // console.log(services);
    return (
        <div>
            {/* <h1 className='py-5 text-4xl font-bold text-center'>All Services</h1> */}
            <div className='w-11/12 mx-auto bg-yellow-400 py-5 p-3 flex items-center rounded-lg mt-10 gap-5'>
            <h1 className='py-5 text-4xl font-bold text-center'>All Services</h1>
                <BiSearch></BiSearch>
                <input
                    onKeyUp={(e) => setSearch(e.target.value)}
                    className='input w-full max-w-2xl' type="text" placeholder='Search Services by Category' />
                {/* <div className='space-y-3'>
                    <input
                        onKeyUp={(e) => setMinSalary(e.target.value)}
                        className='input w-full max-w-xs' type="text" placeholder='Min Salary' />
                    <input
                        onKeyUp={(e) => setMaxSalary(e.target.value)}
                        className='input w-full max-w-xs' type="text" placeholder='Max Salary' />
                </div> */}
            </div>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-20'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>

    );
};

export default Services;
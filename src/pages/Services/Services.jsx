import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from '../../component/ServiceCard';
import { BiSearch } from 'react-icons/bi';

const Services = () => {
    const [services, setServices] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState(null)



    const fetchAllServices = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/services?search=${search}`
        )
        setServices(data)
    }

    useEffect(() => {
        fetchAllServices()
    }, [search])



    useEffect(
        () => {
            if (category) {
                axios.get(`${import.meta.env.VITE_API_URL}/services?search=${search}`
                ).then(res => {
                    //  const filterdServices = res.data.filter(item=>item.category === category)
                    const filterdServices = res.data.filter(item => item.category === category)
                    setServices(filterdServices)
                })

            }


        }, [category])




    console.log(category);

    // console.log(services);
    return (
        <div>
            {/* <h1 className='py-5 text-4xl font-bold text-center'>All Services</h1> */}
            {/* <div className='w-11/12 mx-auto bg-secondary py-5 p-3 flex flex-col lg:flex-row justify-between items-center rounded-lg mt-10 gap-5'> */}
            <div className='w-11/12 mx-auto bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 py-5 p-3 flex flex-col lg:flex-row justify-between items-center rounded-lg mt-10 gap-5'>
                {/* <h1 className='py-5 text-2xl w-full font-bold lg:text-left text-center'>All Services</h1> */}
                {/* <h1 className='py-5 text-3xl md:text-4xl w-full font-bold lg:text-left text-center'>All Services</h1> */}
                <h1 className="text-xl md:text-2xl lg:text-3xl w-full text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600">All Services</h1>
                <div className='flex justify-evenly items-center gap-3 w-full'>
                    <div className='relative flex items-center justify-start w-full'>
                        <BiSearch className='absolute left-2 top-1/3 text-xl font-semibold'></BiSearch>
                        <input
                            onKeyUp={(e) => setSearch(e.target.value)}
                            className='input w-full max-w-2xl pl-7' type="text" placeholder='Search Services by Title' />
                    </div>
                    {/* <div className='space-y-3'>
                    <input
                        onKeyUp={(e) => setMinSalary(e.target.value)}
                        className='input w-full max-w-xs' type="text" placeholder='Min Salary' />
                    <input
                        onKeyUp={(e) => setMaxSalary(e.target.value)}
                        className='input w-full max-w-xs' type="text" placeholder='Max Salary' />
                </div> */}
                    <div className='w-full'>
                        <select
                            id="category"
                            name="category"
                            defaultValue={category}
                            onChange={
                                (e) => setCategory(e.target.value)
                            }
                            //   className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                            className="input w-full max-w-2xl"
                            required
                        >
                            <option disabled>
                                Select a category
                            </option>
                            <option value="Technology">Technology</option>
                            <option value="Health">Health</option>
                            <option value="Education">Education</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Finance">Finance</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 min-h-screen my-10'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>

    );
};

export default Services;
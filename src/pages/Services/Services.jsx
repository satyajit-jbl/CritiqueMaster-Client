import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from '../../component/ServiceCard';
import { BiSearch } from 'react-icons/bi';

const Services = () => {
    const [services, setServices] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState(null);
    const [sortOrder, setSortOrder] = useState(""); // "asc" or "desc"

    const fetchAllServices = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/services?search=${search}`);
        setServices(data);
    };

    useEffect(() => {
        fetchAllServices();
    }, [search]);

    useEffect(() => {
        if (category) {
            axios.get(`${import.meta.env.VITE_API_URL}/services?search=${search}`)
                .then(res => {
                    const filteredServices = res.data.filter(item => item.category === category);
                    setServices(filteredServices);
                });
        }
    }, [category]);

    // Sorting function
    const handleSort = (order) => {
        const sorted = [...services].sort((a, b) =>
            order === "asc" ? a.price - b.price : b.price - a.price
        );
        setServices(sorted);
        setSortOrder(order);
    };

    return (
        <div>
            <div className='w-11/12 mx-auto bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 py-5 p-3 flex flex-col lg:flex-row justify-between items-center rounded-lg mt-10 gap-5'>
                <h1 className="text-xl md:text-2xl lg:text-3xl w-full text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600">
                    All Services
                </h1>
                <div className='flex justify-evenly items-center gap-3 w-full'>
                    {/* Search Input */}
                    <div className='relative flex items-center justify-start w-full'>
                        <BiSearch className='absolute left-2 top-1/3 text-xl font-semibold' />
                        <input
                            onKeyUp={(e) => setSearch(e.target.value)}
                            className='input w-full max-w-2xl pl-7'
                            type="text"
                            placeholder='Search Services by Title'
                        />
                    </div>

                    {/* Category Dropdown */}
                    <div className='w-full'>
                        <select
                            id="category"
                            name="category"
                            defaultValue={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="input w-full max-w-2xl"
                            required
                        >
                            <option disabled>Select a category</option>
                            <option value="Technology">Technology</option>
                            <option value="Health">Health</option>
                            <option value="Education">Education</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Finance">Finance</option>
                        </select>
                    </div>

                    {/* Sort Button */}
                    <div className='w-full flex justify-center'>
                        {/* <button
                            onClick={() => handleSort(sortOrder === "asc" ? "desc" : "asc")}
                            className="px-4 py-3 bg-secondary text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all"
                        >
                            Sort {sortOrder === "asc" ? "↓" : "↑"}
                        </button> */}
                        <button
                            onClick={() => handleSort(sortOrder === "asc" ? "desc" : "asc")}
                            className="relative px-6  py-3 font-semibold text-white border-2 border-blue-500 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg active:scale-95"
                        >
                            Sort {sortOrder === "asc" ? "↓" : "↑"}
                        </button>


                    </div>
                </div>
            </div>

            {/* Service Cards Grid */}
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 min-h-screen my-10'>
                {services.map(service => (
                    <ServiceCard key={service._id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default Services;

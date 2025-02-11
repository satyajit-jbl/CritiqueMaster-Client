import React, { useState } from 'react';
import AutoSlidingImageSlider from '../../component/AutoSlidingImageSlider';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../component/ServiceCard';
import AppSection from '../../component/AppSection';
import ServicesSection from '../../component/ServicesSection';
import FeaturesSection from '../../component/FeaturesSection';
import Partners2 from '../Partners/Partners2';
import Statistics from '../../component/Statistics';

const Home = () => {
    const services = useLoaderData();
    const [sortedServices, setSortedServices] = useState(services);
    const [isAscending, setIsAscending] = useState(true);

    // Sorting Function
    const handleSort = () => {
        const sorted = [...sortedServices].sort((a, b) => 
            isAscending ? a.price - b.price : b.price - a.price
        );
        setSortedServices(sorted);
        setIsAscending(!isAscending); // Toggle sorting order
    };

    return (
        <div>
            <AutoSlidingImageSlider />

            <div className="text-center my-6">
                <h1 className="text-3xl font-bold">Our Featured Services</h1>
                <button
                    onClick={handleSort}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all"
                >
                    Sort by Price {isAscending ? "↑" : "↓"}
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5 place-items-center">
                {sortedServices.map(service => (
                    <ServiceCard key={service._id} service={service} />
                ))}
            </div>

            <Statistics />
            <Partners2 />
            <ServicesSection />
            <AppSection />
            <br /><br />
            <FeaturesSection />
        </div>
    );
};

export default Home;

import React from 'react';
import AutoSlidingImageSlider from '../../component/AutoSlidingImageSlider';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../component/ServiceCard';
import AppSection from '../../component/AppSection';
import ServicesSection from '../../component/ServicesSection';
import FeaturesSection from '../../component/FeaturesSection';


const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <AutoSlidingImageSlider></AutoSlidingImageSlider>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <ServicesSection></ServicesSection>

            <AppSection></AppSection>
          
            <br />
            <br />
            <FeaturesSection></FeaturesSection>
        </div>

    );
};

export default Home;
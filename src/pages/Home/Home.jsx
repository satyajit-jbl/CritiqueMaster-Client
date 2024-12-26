import React from 'react';
import AutoSlidingImageSlider from '../../component/AutoSlidingImageSlider';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../component/ServiceCard';
import AppSection from '../../component/AppSection';
import ServicesSection from '../../component/ServicesSection';
import FeaturesSection from '../../component/FeaturesSection';
import AppSection2 from '../../component/AppSection2';
import Partners from '../Partners/partners';
import Statistics from '../../component/Statistics';


const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <AutoSlidingImageSlider></AutoSlidingImageSlider>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5 place-items-center'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <Statistics></Statistics>
            <Partners></Partners>
            <ServicesSection></ServicesSection>

            <AppSection></AppSection>

            <br />
            <br />
            <FeaturesSection></FeaturesSection>
            {/* <AppSection2></AppSection2> */}
        </div>

    );
};

export default Home;
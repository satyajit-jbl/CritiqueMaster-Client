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
import Partners2 from '../Partners/Partners2';


const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <AutoSlidingImageSlider></AutoSlidingImageSlider>
            <div className='text-center my-10'>
                <h1 className='text-4xl font-bold text-primary'>Our Featured Services</h1>
                <p className='text-lg text-secondary mt-2'>Tailored Solutions for Your Needs</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5 place-items-center'>
                {/* <h1>Our Featured Services</h1> */}
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <Statistics></Statistics>
            {/* <Partners></Partners> */}
            <Partners2></Partners2>
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
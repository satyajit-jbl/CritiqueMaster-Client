import React from 'react';
import AutoSlidingImageSlider from '../../component/AutoSlidingImageSlider';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../component/ServiceCard';


const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <AutoSlidingImageSlider></AutoSlidingImageSlider>

            {
                services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
            }
        </div>
        
    );
};

export default Home;
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/Footer/Footer';
import FadeInComponent from '../component/FadeInComponent/FadeInComponent';
import DynamicTitle from '../component/DynamicTitle';



const MainLayout = () => {
    return (
        <div className=' mx-auto min-h-screen flex flex-col'>
            <DynamicTitle></DynamicTitle>
            <Navbar></Navbar>
            {/* <div className='flex-grow'></div> */}
            
            {/* <div className='min-h-[calc(100vh-306px)]'> */}
            <div className='min-h-screen'>
            <Outlet></Outlet>
            </div>
            
            

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/Footer/Footer';
import FadeInComponent from '../component/FadeInComponent/FadeInComponent';


const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto min-h-screen flex flex-col'>
            <Navbar></Navbar>
            <div className='flex-grow'></div>
            <Outlet></Outlet>
            <FadeInComponent></FadeInComponent>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
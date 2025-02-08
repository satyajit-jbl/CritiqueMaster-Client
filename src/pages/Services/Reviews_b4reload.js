import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../component/AuthProvider/AuthProvider';
import axios from 'axios';
import ReviewCard from '../../component/ReviewCard';
import useReviews from '../../Hooks/useReviews';
import { useQuery } from '@tanstack/react-query';
// import {  } from 'framer-motion/client';

const Reviews = () => {
    const { user } = useContext(authContext)
    // const [reviews, setReviews]= useState([]);
    // const { reviews } = useReviews();
    console.log(user);

    const { data: reviews, isLoading, isError, error } = useQuery({
        queryKey: ['userReviews'],
        queryFn: fetchAllReviews
    });
    if (isLoading) {
        return <p className='text-5xl text-center font-bold text-green-400'><span className="loading loading-infinity loading-xl"></span> </p>
    }

    if (isError) {
        return <p className='text-5xl text-center font-bold text-red-500'>{error.message}</p>
    }
    // console.log(reviews);
    // useEffect(()=>{
    //     fetchAllReviews()
    // },[user])
     async function fetchAllReviews () {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/reviews-list/${user?.email}`,
            // const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/reviews-list/sat@gmail.com`,
            { withCredentials: true }
        )
        return response.data;
        // setReviews(data)
    }


    // console.log(reviews);
    return (

        <section>
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 mb-10 gap-10 py-10'>
                {
                    reviews?.map(review => <ReviewCard key={review._id} reviewData={review}></ReviewCard>)
                }
            </div>

        </section>
    );
};

export default Reviews;
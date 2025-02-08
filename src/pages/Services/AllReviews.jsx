import axios from "axios";
import { useEffect, useState } from "react";
import ReviewCard from "../../component/ReviewCard";
import useReviews from "../../Hooks/useReviews";
import { useQuery } from "@tanstack/react-query";


const AllReviews = ({ serviceId }) => {
    const { getReviews } = useReviews()
    // const [reviews, setReviews] = useState([]);
    // useEffect(()=>{
    //     fetchAllReviews()
    // },[serviceId])
    // const fetchAllReviews = async()=>{
    //     const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/all-reviews/${serviceId}`)
    //     setReviews(data)
    // }

    // let count = reviews.length;


    const { data: reviews, isLoading, isError, error, } = useQuery({
        queryKey: ["reviews", serviceId],
        queryFn: () => getReviews(serviceId)

    });
    console.log("Service ID:", serviceId);

    if (isLoading) {
        return <p className="text-5xl text-center font-bold text-green-400">
            <span className="loading loading-infinity loading-xl"></span>
        </p>
        // <p className='text-5xl text-center font-bold text-green-400'>loading.... </p>
    }

    if (isError) {
        return <p className='text-5xl text-center font-bold text-red-500'>{error.message}</p>
    }

    console.log(reviews);



    // async function handleDEleteReview(id){
    //     try{
    //       const response = await axios.delete(`${import.meta.env.VITE_API_URL}/reviews/${id}`);
    //     if(response.status === 200){
    //       const reviewFilter = reviews.filter(item=> item._id !== id);
    //       setReviews(reviewFilter);
    //       alert("Deleted Successfully")
    //     }

    //     }catch(error){
    //       console.log(error);
    //     }
    //     // console.log(reviewFilter);
    //     // console.log(id);
    // }





    // const {data, isLoading, isError, error, isFetching} = useQuery({
    //     queryKey:["reviews"],
    //     queryFn:async()=> await axios.get(`${import.meta.env.VITE_API_URL}/all-reviews/${serviceId}`)
    // })

    // if(isLoading || isFetching){
    //     return <p className="text-4xl font-semibold italic text-green-400 text-center min-h-screen">Loading. . .</p>
    // }
    // if(isError){
    //     return <p className="text-4xl font-semibold italic text-red-700 text-center">{error.message}</p>
    // }
    // // console.log(data);


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* <div className="flex justify-between flex-wrap gap-5 bg-green-500"> */}
            {/* <p>{count}</p> */}
            {
                reviews?.map(review1 => <ReviewCard key={review1._id} reviewData={review1}></ReviewCard>)
            }
        </div>
    );
};

export default AllReviews;
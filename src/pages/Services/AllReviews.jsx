import axios from "axios";
import { h1 } from "framer-motion/client";
import { useEffect, useState } from "react";
import ReviewCard from "../../component/ReviewCard";


const AllReviews = ({serviceId}) => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetchAllReviews()
    },[serviceId])
    const fetchAllReviews = async()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/all-reviews/${serviceId}`)
        setReviews(data)
    }
    // console.log(reviews);

    return (
        <div>
            {
                reviews.map(review1=> <ReviewCard review={review1}></ReviewCard>)
            }
        </div>
    );
};

export default AllReviews;
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthProvider, { authContext } from "../component/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useReviews = () => {
    // const [reviews, setReviews] = useState([]);
    // const navigate = useNavigate();
   
    
    async function getReviews(id){
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/all-reviews/${id}`);
        // setReviews(response.data);.
        console.log(response.data);
        return response.data

    }

    

    async function addReview(data){
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/reviews`, data)
            // console.log(response.data);

            if(response?.data?.insertedId){
                // setReviews(reviews=>[...reviews, data ])
                // console.log(reviews);
                // console.log(response);
                return response.data;
            }

            
            toast.success('Review added successfully!');
        } catch (err) {
            toast.error(err.message)
        }
    }
    
    async function handleUpdateReview (data){
        const {_id, ...newData} = data
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/reviews/${data._id}`, newData);
        // console.log(response);
    } 

    async function handleDEleteReview(id){
        // try{
          const response = await axios.delete(`${import.meta.env.VITE_API_URL}/reviews/${id}`);
        //   console.log(response);
          return response;
        // if(response.status === 200){
        //   const reviewFilter = reviews.filter(item=> item._id !== id);
        //   setReviews(reviewFilter);
          
        //   alert("Deleted Successfully")
        //   navigate('/')
        // }
        
        // }catch(error){
        //   console.log(error);
        // }
    }



    return {
        getReviews, 
        // reviews,
        // setReviews,
        addReview,
        handleDEleteReview,
        handleUpdateReview,
       
    }
};

export default useReviews;
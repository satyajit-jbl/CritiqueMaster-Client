import axios from 'axios';
import React, { useContext, useState } from 'react';
import { FaStar } from "react-icons/fa";
import useReviews from '../Hooks/useReviews';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authContext } from './AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const ReviewCard = ({reviewData}) => {
    const {user} = useContext(authContext);
    const [updateModal, setUpdateModal]=useState(false)
    const {handleUpdateReview,handleDEleteReview} = useReviews()
    const clientQuery = useQueryClient();
    const [inputData, setInputData] = useState({
      rate: 1, 
      review: ""
    });
    
    const {UserName, UserPhoto, companyName, email, review, serviceId, serviceTitle, _id, rate} = reviewData;
    // console.log(rate);
    const deleteReviewMutaion = useMutation({
      mutationKey: ['reviews'],
      mutationFn: (id)=>handleDEleteReview(id),
      onSuccess: ()=>{
        clientQuery.invalidateQueries('reviews'),
        toast.success('Reviews deleted successfully!');
        // alert('Reviews deleted successfully')
      },
      onError: ()=>{
        alert('Erron in delete revieews')
      }
    });
   const newData = {
    UserName, UserPhoto, companyName, email, serviceId, serviceTitle, _id
   }
    const finalData = {...newData, ...inputData}

    function handleUpdate(e){
      e.preventDefault();
      updateReviewMutation.mutate(finalData);
        // console.log(finalData);
        
    }
    
   
    const updateReviewMutation = useMutation({
        mutationKey: ['reviews'],
        mutationFn: (reviewData)=>handleUpdateReview(reviewData),
        onSuccess: ()=>{
          clientQuery.invalidateQueries('reviews'),
          alert('Reviews Updated successfully')
        },
        onError: ()=>{
          alert('Erron in Updating reviews')
        }
      });
    

    const getCurrentDate = () => {
      const date = new Date();
      const options = { day: '2-digit', month: 'short', year: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    };
    
    const handleRating = (rate) => {
      setInputData({...inputData, rate:rate})
      
      // other logic
    }
    
    // console.log(rating);
    

    return (
        <section className=' w-full h-full'>
        <div className="w-full h-full card bg-base-100 shadow-xl">
            <div className="card-body ">
                <img className='h-28 w-28 rounded-xl' src={UserPhoto} alt="" />
                <h2 className="text-xl">Name: {UserName}</h2>
                <h2 className="card-title">Service: {serviceTitle}</h2>
                <h2 className="">Company Name: {companyName}</h2>
               <div className='flex justify-start items-center gap-1'>
               {
                    Array(review?.rate).fill(null).map((_,index)=><FaStar key={index} fill="gold" />)
                }
               </div>
                
                <p>Review: {review}</p>
                <p>Date: {getCurrentDate()}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>setUpdateModal(true)} className="btn bg-yellow-400">Update</button>
                    <button  onClick={()=>deleteReviewMutaion.mutate(_id)} className="btn bg-yellow-400">Delete</button>
                </div>
            </div>
        </div>
        
        {
            updateModal ?
            <section className='fixed flex justify-center items-center top-0 bottom-0 left-0 right-0 bg-black/45 z-50'>
            <form onSubmit={handleUpdate}
            className="bg-white w-10/12 mx-auto h-4/5 md:h-5/6 lg:h-2/3 shadow rounded-lg p-6 mb-8 relative"
          >
            <h3 className="text-lg font-semibold mb-4">Update Review</h3>
            <textarea
              onChange={(e)=>setInputData({...inputData, review:e.target.value})}
              className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              name='review'
              placeholder="Write your review here..."
              defaultValue={review}
              // value={newReview.comment}
              // onChange={(e) =>
              //   setNewReview({ ...newReview, comment: e.target.value })
              // }
              required
            ></textarea>
            
  
         {/* rating */}
            <div className="flex items-center mb-4">
              <span className="mr-2">Your Rating:</span>
                
              <div className="flex flex-row space-x-2">
                {/* {Array.from({ length: 5 }).map((_, index) => {
                  const starValue = index + 1; 
                  return (
                    <span
                      key={index}
                      className={`cursor-pointer text-2xl ${starValue <= rate ? 'text-yellow-500' : 'text-gray-400'
                        }`}
                      onClick={() => handleRating(starValue)} 
                    >
                      ★
                    </span>
                  );
                })} */}
                {/* {Array(rate).fill(null).map((_, index) => <FaStar key={index} fill="gold" />)} */}
              </div>
            </div>
            
  
  
  
  
  
            <div>
              {/* <h2>{user?.photoURL}</h2> */}
              <img referrerPolicy='no-referrer' className='h-24 w-24 rounded-full' src={user?.photoURL} alt="" />
              <h2>Name: {user?.displayName}</h2>
              <h2>Email: {user?.email}</h2>
            </div>
            <button
           
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mt-3"
            >
              Submit Review
            </button>
            <span onClick={()=>setUpdateModal(false)} className='absolute top-5 right-5 z-20 btn btn-ghost border-2 rounded-xl'>close</span>
              </form>
              
              </section>
               : ""
        }
    </section>
    );
};

export default ReviewCard;
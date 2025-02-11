import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import axios from 'axios';
import { Card, Typography } from "@material-tailwind/react";
import { easeOut, motion } from "framer-motion";

const Statistics = () => {
  const [data, setData] = useState({ users: 0, reviews: 0, services: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/counts`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching counts:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div><span className="loading loading-bars loading-lg"></span></div>;
  }

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-6">
      {/* <motion.h2 
      animate={{x:5}}
      transition={{duration:2, delay: 1, ease: easeOut, repeat: Infinity}}
      className='text-3xl font-bold text-yellow-600'> <motion.span
      animate={{color: ['#fac440','#faa540','#cafa40','#fa8140']}}
        transition={{duration: 1.5, repeat: Infinity}}
      >Statistics</motion.span> of Users </motion.h2> */}
      {Object.entries(data).map(([key, value]) => (
        <Card className="w-60 p-4 shadow-lg" key={key}>
          <Typography variant="h3" className="text-center font-bold text-blue-500">
            <CountUp end={value} duration={2.5} />
          </Typography>
          <Typography variant="paragraph" className="text-center capitalize">
            {key}
          </Typography>
        </Card>
      ))}
    </div>
  );
};

export default Statistics;

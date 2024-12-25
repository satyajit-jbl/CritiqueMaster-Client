import React from 'react';
import CountUp from 'react-countup';

const Statistics = ({ users, reviews, services }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold">
          <CountUp end={users} duration={2.5} />
        </h2>
        <p className="text-lg">Users</p>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold">
          <CountUp end={reviews} duration={2.5} />
        </h2>
        <p className="text-lg">Reviews</p>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold">
          <CountUp end={services} duration={2.5} />
        </h2>
        <p className="text-lg">Services</p>
      </div>
    </div>
  );
};

export default Statistics;

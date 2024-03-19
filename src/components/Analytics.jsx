import React from 'react';
import Laptop from '../images/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 items-center'>
        <img className='w-full md:w-[500px] mx-auto my-4' src={Laptop} alt="Laptop" />
        <div className='flex flex-col justify-center'>
          <p className='font-bold text-[#00df9a]'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className='bg-[#000300] w-[200px] rounded-md font-medium my-6 mx-auto py-3 md:mx-0 text-[#00df9a]'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

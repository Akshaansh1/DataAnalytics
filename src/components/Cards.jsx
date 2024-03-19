import React from 'react';
import Single from '../images/single.png';
import Double from '../images/double.png';
import Triple from '../images/triple.png';

const Cards = () => {
  return (
    <div className='px-4 w-full bg-white py-[10rem]'>
        <div className='mx-auto max-w-[1240px] grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col py-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 bg-white mx-auto mt-[-3rem]' src = {Single} alt='/'/>
            <h2 className=' text-2xl font-bold text-center py-8'>Single User</h2>
            <p className=' text-4xl text-center font-bold'>$ 149</p>
            <div className=' text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>500 GB STORAGE</p>
                <p className='py-2 border-b mx-8'>1 Granted User</p>
                <p className='py-2 border-b mx-8'>Send Upto 2 GB</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black pxs-2'>Start Trial</button>
        </div>

        <div className='w-full shadow-xl bg-gray-100 flex flex-col py-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 bg-white mx-auto mt-[-3rem] bg-transparent' src = {Double} alt='/'/>
            <h2 className=' text-2xl font-bold text-center py-8'>Partnership</h2>
            <p className=' text-4xl text-center font-bold'>$ 199</p>
            <div className=' text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>1 TB STORAGE</p>
                <p className='py-2 border-b mx-8'>3 Granted User</p>
                <p className='py-2 border-b mx-8'>Send Upto 10 GB</p>
            </div>
            <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a] pxs-2'>Start Trial</button>
        </div>

        <div className='w-full shadow-xl flex flex-col py-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 bg-white mx-auto mt-[-3rem]' src = {Triple} alt='/'/>
            <h2 className=' text-2xl font-bold text-center py-8'>Group Account</h2>
            <p className=' text-4xl text-center font-bold'>$ 299</p>
            <div className=' text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>2 TB STORAGE</p>
                <p className='py-2 border-b mx-8'>10 Granted User</p>
                <p className='py-2 border-b mx-8'>Send Upto 20 GB</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black pxs-2'>Start Trial</button>
        </div>


      </div>
    </div>
  );
};

export default Cards;

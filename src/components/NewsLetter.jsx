import React from 'react'

const NewsLetter = () => {
  return (
    <div className='text-white w-full py-16 px-4' >
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 '>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col md:flex-row items-center justify-center'>
            <input type='text' placeholder='Enter Email' className='p-3 rounded-md flex text-black w-full px-2' />
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black pxs-2'>Notify Me</button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default NewsLetter
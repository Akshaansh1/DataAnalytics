import React,{useState} from 'react'
import { AiOutlineClose,AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {

    const [nav, SetNav] = useState(false);/// creating a hook

    const HandleNav = () => {       /// Setting the Nav to different place
        SetNav(!nav)
    }

  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
        <h1 className= "w-full text-3xl font-bold text-[#00df9a]" >REACT .</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Comapny</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={HandleNav} className='block md:hidden'>
            {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] border-r h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className= "w-full text-3xl font-bold text-[#00df9a] m-4" >REACT .</h1>
        <ul className='pt-4 uppercase'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Comapny</li>
            <li className='p-4 border-b border-gray-600'>Resources</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar
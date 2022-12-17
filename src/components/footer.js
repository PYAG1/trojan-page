import React from 'react'
import { GiClosedBarbute } from "react-icons/gi";
import { Link } from 'react-router-dom';

import {FaCopyright} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className=' w-full  text-white'>
    <div className=' w-full bg-[#37586b] h-[180px] p-4 flex items-center flex-col lg:flex-row lg:h-[70px] lg:justify-between '>

     <div className=' flex items-center pb-3'> <GiClosedBarbute size={40} /><p className=' text-xl'>Trojan.</p></div>
     <div className='flex flex-col items-center lg:flex-row lg:mr-[1em]'>
     <Link to="/" className="  lg:ml-7  hover:text-[#f3bc97]">Home</Link>
     <Link to="/about" className=" lg:ml-7 hover:text-[#fae1d0]" >About</Link>
     <Link to="/signup" className=" lg:ml-7 hover:text-[#fae1d0]" >Sign up</Link>
     <Link to="/login" className=" lg:ml-7 hover:text-[#fae1d0]" >Login</Link>
     </div>



    </div>

    <div className=' bg-black h-8  flex justify-center items-center '>
    <small className='pr-2'> <FaCopyright/> </small>
        <small>Copyright PYAG 2022</small>
    </div>
    
   </div>
   
  )
}

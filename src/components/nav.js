import React from 'react';
import { useRef } from 'react';
import { GiClosedBarbute } from "react-icons/gi";
import { NavLink,Link } from 'react-router-dom';
import { FaTimes,FaStream} from "react-icons/fa";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillMail,AiFillGithub
} from "react-icons/ai";
import { useState } from 'react';

export default function Nav() {
  const NavR= useRef();


  const show=()=>{
      NavR.current.classList.toggle("responsive");
  }

  const [nav, setNav]=useState(false)

  const handlenav=()=>{
    setNav(!nav)
     
  }


  
  return (
    <header className=' p-4 flex  items-center w-full h-[80px]'>
        <div className=' flex items-center mr-14'>
            <GiClosedBarbute size={45}/>
            <p className=' text-3xl font-medium'>Trojan.</p>

        </div>
       
        <ul className='hidden lg:visible lg:items-center lg:flex '>
                      <Link to='/'>
                        <li className='text-xl  px-7   hover:font-medium'>Home</li>
                      </Link>

                      <Link to='/about'>
                        <li className='text-xl  px-7 hover:font-medium'>About</li>
                      </Link>

                      <Link to='/login'>
                        <li className='text-xl   px-7  hover:font-medium'>Login</li>
                      </Link>

                      
                    </ul>
    
        
        <div className=' absolute right-4 lg:hidden'>
          <FaStream size={30} onClick={handlenav}/>
        </div>
      
          <div>
            <div className={nav ? ' lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>


              <div className={nav ?'fixed right-0 top-0 w-[55%] sm:w-[40%] md:w-[60%]  h-screen bg-white p-10 md:p-5 ease-in duration-500 ': ' h-screen fixed right-[-100%] top-[0] ease-in duration-500 '}>
            
                  <div className=' flex justify-end mb-16'>
                    <FaTimes onClick={handlenav} size={40}/>

                  </div>

                  <div className=' flex flex-col justify-between items-center  md:h-[550px] '>

                    <ul>
                      <Link to='/'>
                        <li className='text-xl py-[1em] md:text-3xl font-medium'>Home</li>
                      </Link>

                      <Link to='/about'>
                        <li className='text-xl py-[1em] md:text-3xl font-medium'>About</li>
                      </Link>

                      <Link to='/login'>
                        <li className='text-xl py-[1em] md:text-3xl font-medium'>Login</li>
                      </Link>

                      
                    </ul>

                    <div className='pt-[4em] border-t-2'>
                      <button className='w-[120px] h-[50px] bg-[black] text-center rounded-3xl text-lg text-white md:mt-3 md:w-[140px] md:h-[60px]'>Sign Up</button>
                      <div className="text-3xl flex justify-center gap-6 py-8 text-[#21455a]">
                      <a href="https://twitter.com/pyaggg0"> <AiFillTwitterCircle /></a>
            <a href="https://github.com/PYAG1">  <AiFillGithub/></a>
             <a href="https://www.linkedin.com/in/papa-yaw-agyeman-gyekye-86053b235"> <AiFillLinkedin/></a>
                      </div>
                    </div>

                  </div>
                  

               

              </div>
              </div>




          </div>

           





        
    </header>
  )
}
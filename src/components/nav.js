import React from 'react';
import { GiClosedBarbute } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';
import { FaTimes,FaStream} from "react-icons/fa";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub
} from "react-icons/ai";
import { useState } from 'react';
import { useAuth } from '../context.js/contex';

export default function Nav() {

  const {profile,contacts} = useAuth()

  
const move= useNavigate()

  const [nav, setNav]=useState(false)

  const handlenav=()=>{
    setNav(!nav)
     
  }


  
  return (
    <header className=' p-4 flex  items-center w-full h-[80px]'>
        <div className=' flex items-center mr-14'>
            <GiClosedBarbute size={45}/>
            <p className=' text-3xl font-medium' onClick={()=>move('/')}>Trojan.</p>

        </div>
       
        <ul className='hidden  lg:visible lg:items-center lg:flex w-[80%] justify-between '>
          <div className='flex items-center'>
                      <Link to='/'>
                        <li className='text-xl  px-7   hover:font-medium'>Home</li>
                      </Link>

                      <Link to='/about'>
                        <li className='text-xl  px-7 hover:font-medium'>About</li>
                      </Link>


               
                      <Link to='/user'>
                        <li className='text-xl   px-7  hover:font-medium'>Profile</li>
                      </Link>


                

                      
                      { profile === null  &&  <Link to='/login'>
                        <li className='text-xl   px-7  hover:font-medium'>Login</li>
                      </Link>}
                      </div>
               

                      <button className='w-[120px] h-[40px] bg-[black] text-center rounded-3xl text-base text-white font-medium hover:bg-white hover:text-black' onClick={()=>{move('/signup')}}>Sign Up</button>

                      
                    </ul>
    
        
        <div className=' absolute right-4 lg:hidden'>
          <FaStream size={30} onClick={handlenav}/>
        </div>
      
          <div>
            <div className={nav ? ' bg-fixed overflow-hidden lg:hidden fixed left-0 top-0 w-full h-full bg-black/70' : ''}>


              <div className={nav ?'bg-fixed  fixed right-0 top-0 w-[55%] sm:w-[40%] md:w-[60%] overflow-hidden  h-full bg-white p-10 md:p-5 ease-in duration-500   ': ' bg-fixed  h-full fixed right-[-100%] top-[0] ease-in duration-500 '}>
            
                  <div className=' flex justify-end mb-16'>
                    <FaTimes onClick={handlenav} size={40}/>

                  </div>

                  <div className=' flex flex-col justify-between items-center   md:h-[550px] '>

                    <ul>
                      <Link to='/' >
                        <li className='text-xl py-[1em] md:text-3xl font-medium' onClick={handlenav}>Home</li>
                      </Link>

                      <Link to='/about'>
                        <li className='text-xl py-[1em] md:text-3xl font-medium' onClick={handlenav}>About</li>
                      </Link>
     
                  
           <Link to='/user' >
                        <li className='text-xl py-[1em] md:text-3xl font-medium' onClick={handlenav}>Profile</li>
                      </Link>

                  { profile === null && <Link to='/login'>
                        <li className='text-xl py-[1em] md:text-3xl font-medium' onClick={handlenav}>Login</li>
                      </Link>}

                      
                    </ul>

                    <div className='pt-[4em] border-t-2'>
                      <button className='w-[120px] h-[50px] bg-[black] text-center rounded-3xl text-lg text-white md:mt-3 md:w-[140px] md:h-[60px]' onClick={()=>{move('/signup')
                      handlenav()
                    
                    }}>Sign Up</button>
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

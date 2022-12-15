import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './context.js/contex';

export default function Signup() {
    const move= useNavigate();
    const [user, setUser]= useState()
    const [pass, setPass]= useState()
    const {users}= useAuth() 

    
    //bg-[#1d1d1f]  
  return (
    <div className=' h-screen z-10 flex bg-[#1d1d1f]    items-center p-6  md:justify-center'>

        <div className=' flex flex-col justify-evenly w-full h-[400px] bg-[#39383d] text-white border-2 border-black p-5 rounded-3xl md:w-[350px] md:h-[350px]'>
        <p className=' text-4xl font-[Oswald] '>Sign up</p>
           <form className=' flex flex-col justify-evenly items-center h-full '>
            <div>
           <label htmlFor='username' className=' font-[Oswald]  text-2xl font-medium '>Username</label>
            <input type="text" id='username' name="username" className='mt-[.5em] w-full h-[35px] p-1 placeholder:p-1  text-black  placeholder:text-black' placeholder='Enter your username' onChange={(e)=>setUser(e.target.value)}/>
            </div>
            <div>
           <label htmlFor='password' className=' text-2xl font-medium font-[Oswald] '>Password</label>
            <input type="password" id='password' name="password" className='mt-[.5em] w-full h-[35px] text-black p-1 placeholder:p-1 placeholder:text-black' placeholder='Enter your password' onChange={(e)=>setPass(e.target.value)}  />
            </div>

            <button className=' w-[100px] h-[50px] bg-[#37586b] rounded-3xl text-white text-base font-medium transition-transform hover:bg-white hover:text-[#37586b] ' onSubmit={
              (e)=>{
                e.preventDefault()
                users()
                move("/login") 


                         
                         
                         }}> Sign up</button>


           </form>
        </div>


        
    </div>
  )
}

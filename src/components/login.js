import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context.js/contex'

export default function Login() {
  const [value, setvalue]=useState()
  const [valuepass, setvaluepass]=useState()
  const {contacts}= useAuth()
  const goto= useNavigate()

  console.log(contacts)

function login(e){
  e.preventDefault()
  contacts.map((item)=>{
    if(value === item.name && valuepass === item.password ){
      goto('/')}

      
  else{
    console.log('apple')
  }
  }

  
  )
}




  console.log(value,valuepass)
  return (
    <div className=' h-screen z-10 flex bg-[#1d1d1f] p-6    items-center   md:justify-center'>

    <div className=' flex flex-col justify-evenly w-full h-[400px] bg-[#39383d] text-white border-2 border-black p-5 rounded-3xl md:w-[350px] md:h-[350px]'>
    <p className=' text-4xl font-[Oswald] '>Login</p>
       <form className=' flex flex-col justify-evenly items-center h-full '>
        <div>
       <label htmlFor='username' className=' font-[Oswald]  text-2xl font-medium '>Username</label>
        <input type="text" id='username' name="username" className='mt-[.5em] w-full h-[35px] text-black p-1 placeholder:text-black placeholder:p-1 ' placeholder='Enter your username' onChange={(e)=>setvalue(e.target.value)}/>
        </div>
        <div>
       <label htmlFor='password' className=' text-2xl font-medium font-[Oswald] '>Password</label>
        <input type="password" id='password' name="password" className='mt-[.5em] w-full h-[35px] text-black p-1 placeholder:text-black placeholder:p-1' placeholder='Enter your password' onChange={(e)=>setvaluepass(e.target.value)}/>
        </div>

        <button className=' w-[100px] h-[50px] bg-[#37586b] rounded-3xl text-white text-base font-medium transition-transform hover:bg-white hover:text-[#37586b] ' onClick={login}  > Login</button>


       </form>
    </div>


    
</div>
  )
}

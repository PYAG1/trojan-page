  import React, { useRef, useState } from 'react'
  import { useNavigate } from 'react-router-dom'
  import { useAuth } from './context.js/contex';
  import { FaEye ,FaEyeSlash} from 'react-icons/fa';
  import Alert from '@mui/material/Alert';

  export default function Signup() {
      const move= useNavigate();
  const [user,setUser]= useState('')
  const [pasw,setpass]= useState('')
      const {users,contacts}= useAuth() 
      const [display,setdisplay]= useState(false)
      const [erroec,seterrorc]= useState(false)

      const [show,setshow]= useState(true)

    

      const texts= show ?  "password" : "text" ;

      console.log(contacts)




      function submit(e){
        e.preventDefault()
        if(user === '' && pasw === ''){
          setdisplay(true)
        }
        else{
          if(pasw.length >= 6 && user.length !== ''){
        users(user.trim(),pasw)
        move("/login") 
      }
      else{
        seterrorc(true)

      }
      }

      }

     
  

      
      //bg-[#1d1d1f]  
    return (
      <div className=' h-screen z-10 flex bg-[#1d1d1f]    items-center p-6  md:justify-center'>

          <div className=' flex flex-col justify-evenly w-full h-[410px] md:h-[380px] lg:h-[380px]  bg-[#39383d] text-white border-2 border-black p-5 rounded-3xl md:w-[350px] '>
          <p className=' text-4xl font-[Oswald] '>Sign up</p>
            <form className=' flex flex-col justify-evenly items-center h-full '>
              <div className='w-full px-2 '>
            <label htmlFor='username' className=' font-[Oswald]  text-2xl font-medium '>Username</label>
              <input type="text" id='username' name="username" className=' mt-[.5em] font-medium w-full h-[35px] p-1 placeholder:p-1  text-black  placeholder:text-black focus:outline-none placeholder:font-medium' placeholder='Enter your username ' onChange={(e)=>{
                setUser(e.target.value)
                setdisplay(false)
                
                }} />
              </div>

              <div className=' w-full px-2  flex flex-col '>
            <label htmlFor='password' className=' text-2xl font-medium font-[Oswald] '>Password</label>
            <div className='flex bg-white mt-3 justify-center p-0'>
            <input type={texts} id='password' name="password" className= ' w-full h-[35px] text-black font-medium p-1 placeholder:px-1 placeholder:text-black focus:outline-none placeholder:font-medium' placeholder='Enter your password ' onChange={(e)=> {
              setpass(e.target.value)
              seterrorc(false)
              setdisplay(false)
            
            
            }}  />
                      <FaEye size={20} onClick={()=>setshow(!show)} className={show ? 'text-black mt-[7px] mr-[14px]  ' : ' hidden'}/>
          <FaEyeSlash size={20} onClick={()=>setshow(!show)}   className={show ?   'hidden' : ' text-black mt-[7px] mr-[14px] '}/>
            </div>
          </div>
              <button className=' my-4 w-[100px] h-[50px] bg-[#37586b] rounded-3xl text-white text-base font-medium transition-transform hover:bg-white hover:text-[#37586b] ' onClick={submit}> Sign up</button>
              
          {display && <Alert className=' md:pb-7 lg:pb-10' severity="error">
          Invalid username or password </Alert>}

          {erroec && <Alert className=' md:pb-7 lg:pb-10' severity="error">
        Input correct username or password </Alert>}


            </form>
            
          </div>


          
      </div>
    )
  }

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context.js/contex'
import { FaEye ,FaEyeSlash} from 'react-icons/fa';
import Alert from '@mui/material/Alert';
import { useLocation } from 'react-router-dom';


export default function Login() {
  const [value, setvalue]=useState()
  const [valuepass, setvaluepass]=useState()
  const {contacts,loginuser}= useAuth()
  const goto= useNavigate()
  const location = useLocation()

  const redirectpath = location.state?.path || '/user'

  const [show,setshow]= useState(true)
  //const [error,seterror]= useState(false)
  const [display,setdisplay]= useState(false)


  const texts= show ?  "password" : "text" ;


  


  console.log(contacts)

function login(e){
  e.preventDefault()

  if(contacts.length === 0 ){
    
    goto('/signup')

  }
  


else{
  contacts.map((item)=>{
    if(value.trim() === item.name && valuepass === item.password ){
      loginuser(item.name)
      goto(redirectpath,{replace:true})
    }
     


      
  else{
     if(value !== item.name || valuepass !== item.password ){
      setdisplay(true)

     }
  
    

  }
  }

  
  )}
}




  console.log(value,valuepass)
  return (
    <div className=' h-screen z-10 flex bg-[#1d1d1f] p-6    items-center   md:justify-center'>
  

    <div className=' flex flex-col justify-evenly w-full h-[410px] md:h-max lg:h-max bg-[#39383d] text-white border-2 border-black p-5 rounded-3xl md:w-[350px] '>
    <p className=' text-4xl font-[Oswald] mb-4 '>Login</p>
       <form className=' flex flex-col justify-evenly items-center h-full '>
        <div className=' w-full px-2'>
       <label htmlFor='username' className=' font-[Oswald]  text-2xl font-medium '>Username</label>
        <input type="text" id='username' name="username" className='mt-[.5em] mb-[1.2em] font-medium w-full h-[35px] text-black p-1 placeholder:text-black placeholder:p-1 focus:outline-none placeholder:font-medium ' placeholder='Enter your username' onChange={(e)=>{setvalue(e.target.value)    
          setdisplay(false)}} required={true}/>
        </div>

        <div className=' w-full px-2  flex flex-col '>
       <label htmlFor='password' className=' text-2xl font-medium font-[Oswald] '>Password</label>
       <div className='flex bg-white mt-3 justify-center p-0'>
        <input type={texts} id='password' name="password" className='font-medium w-full h-[30px] text-black p-1 placeholder:text-black placeholder:px-1  focus:outline-none placeholder:font-medium' placeholder='Enter your password' onChange={(e)=>{setvaluepass(e.target.value)
        setdisplay(false)
        }} required/>
        <FaEye size={20} onClick={()=>setshow(!show)} className={show ?  ' text-black mt-[7px] mr-[14px]  ' : ' hidden'}/>
        <FaEyeSlash size={20} onClick={()=>setshow(!show)}   className={show ?   'hidden' : ' text-black mt-[7px] mr-[14px] '}/>
        </div>
        </div>

        <button className=' mt-[1.4em] w-[100px] h-[50px] bg-[#37586b] rounded-3xl text-white text-base font-medium transition-transform hover:bg-white hover:text-[#37586b] my-3' onClick={login}  > Login</button>
      
         {display && <Alert className=' md:pb-7 lg:mb-[7px]' severity="error">
        Invalid username or password </Alert>}


       </form>
    </div>


    
</div>
  )
}

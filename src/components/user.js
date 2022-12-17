import React from 'react'
import { useAuth } from '../context.js/contex'
import { useNavigate } from 'react-router-dom';

export default function User() {
  const {profile,logout}= useAuth();
  const go = useNavigate()

function handlelog(){
  logout()
  go('/')

}
  

  return (
    <div className=" h-screen p-7">
      <div className=' md:flex md:justify-between pb-7 md:items-center'>
        <h1 className='font-[Oswald] text-5xl pb-9'>Hello <span className=' uppercase'>{profile}</span> !</h1>
        <button className=' w-[120px] h-[40px] bg-[#21455a] text-center rounded-3xl text-lg text-white md:mt-3 md:w-[140px] md:h-[60px]' onClick={handlelog}>logout</button>

        </div>

        <div>
            <div className='box2 w-full h-[300px] bg-[#1d1d1f] rounded-[30px] p-10 flex flex-col  text-white  '>
                <p className=' text-2xl'>Total Balance</p>
                <div className=' flex'>
                    <p className=' text-2xl'>$</p>
                    <p className='pt-5 pl-5 text-6xl '>{Math.floor(Math.random()*1000)}.00</p>
                    

                </div>

            </div>
        </div>



    </div>
  )
}


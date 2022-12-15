import React from 'react'
import Footer from './footer';

import {FaGlobe,FaShieldAlt ,FaHandsHelping} from 'react-icons/fa';
import ims from '../components/undraw_online_transactions_-02-ka.svg'
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const nav= useNavigate();
  return (
 <main>
    <div className=' p-6 font-[Roboto] lg:p-10' >
      <div >
        <div className=' md:flex md:justify-evenly md:pt-[2em] md:items-center'>
        <img src={ims} className="flex items-center mb-[1.5em] md:w-[330px]  md:order-last lg:w-[500px] "/>
     <div>
      <p className=' text-5xl pb-[.4em] font-[Oswald] md:mr-[1.4em] md:pb-2 lg:text-6xl lg:mr-[5em]'>Send Money the secured and fast way!</p>
      <p className=' py-3 text-xl md:mr-3 lg:pr-[7em] '>
       Trojan is the number one security proof and user-friendly transaction app.</p>
       
      <button className=' w-[120px] h-[40px] bg-[#21455a] text-center rounded-3xl text-lg text-white md:mt-3 md:w-[140px] md:h-[60px]' onClick={()=> nav('/signup')}>Join Us!</button>
       </div>
      </div>



   
      
      <section className=' flex justify-evenly text-center pt-10 pb-12'>

        <div className="box p-1 w-[9.5rem]">
          <p className=' font-bold text-xl'>
            1M+
          </p>
          <p>
            Users worldwide
          </p>

        </div>

        <div className='box p-1 w-38'>

          <p className=' font-bold text-xl' >
            14+
          </p>
          <p>
            Years of experience
          </p>

        </div>
      </section>



      <section className=' bg-[#1d1d1f] text-white h-max w-full p-6 '>
        <h2 className=' text-2xl pb-6 mb-[1.5em] border-b-4 border-indigo-500'>What We Offer</h2>


<div>
        <div className=' w-full h-[200px] bg-[#39383d] p-[2em] flex flex-col justify-evenly items-center rounded-[1.5em] mb-7 '>
          <div className=' text-[#fae1d0]'>
          <FaGlobe size={40}/>


          </div>
          <p>
            24/7 Worldwide service
          </p>


        </div>

        <div className=' w-full h-[200px] bg-[#39383d] p-[2em] flex flex-col justify-evenly items-center rounded-[1.5em] mb-7'>
          <div className=' text-[#afc170]' >
          <FaHandsHelping size={40}/>


          </div>
          <p>
            24/7 Customer Service
          </p>


        </div>

        <div className=' w-full h-[200px] bg-[#39383d] p-[2em] flex flex-col justify-evenly items-center rounded-[1.5em] mb-7 '>
          <div className=' text-[#9a82bf]'>
          <FaShieldAlt size={40}/>


          </div>
          <p>
          Secure and Safe transactions
          </p>


        </div>
        </div>
        

      </section>
    </div>
    </div>

    <Footer/>


    
       </main>
  )
}

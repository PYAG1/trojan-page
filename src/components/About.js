import React from 'react'
import Footer from './footer'
import hellno from '../components/undraw_contact_us_re_4qqt.svg'

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillMail,AiFillGithub
} from "react-icons/ai";

export default function About() {
  return (
    <div className=' h-full md:min-h-screen md:flex flex-col justify-between'>
    <div className=' p-6 md:p-20'>
      <div className=' text-5xl font-[Oswald] pb-6 '>
      <p>About Us</p>
     
      </div>

      <div className=' border-b-2 border-[#21455a] p-2'>
        <p className=' text-3xl text-center text-[#21455a] pb-[.4em] md:text-4xl md:font-medium '>Our Story</p>
        <p className=' text-base pb-4 md:text-xl md:font-medium'>
        In 2017, while working on our end of year project, in Ghana, my team and I noticed from our annual survey that the e-banking sector had not been developed to its full capacity. 
        . This situation led us to modify our approach to create Trojan for secure and fast e-banking, a first of its kind. Trojan has gone on from being a local based e-banking serivce to a worldwide scale by exploiting the proliferation and untapped capabilities of technology and the internet.
          
        </p>
      </div>

      <div className=' border-b-2 border-[#21455a] mt-10 p-2'>
        <p className=' text-3xl text-center text-[#21455a] pb-[.4em] md:text-4xl md:font-medium '>Our Misson</p>
        <p className=' text-base pb-6 md:text-xl md:font-medium'>
          Trojan runs on Achielles, an AI defense software that tracks, stores , speed up and secure your day to day finances.
          Achielles unlike its mythological counterpart has no weakness. Its performance and functions are updated by the best of engineers money can buy.
          Trojan is made so easy to use with a user interactive UI.

          
        </p>
      </div>

      <div className=' border-b-2 border-[#21455a] mt-10 p-2 flex flex-col justify-center items-center mb-8'>
        <img src={hellno} className="mb-[20px] md:mb-[30px] "/>
        
        <p className=' text-3xl text-center text-[#21455a] pb-[.4em] md:text-4xl md:font-medium '>We'd love to hear from you</p>
        <div className="text-3xl flex justify-center gap-16 py-3 text-[#21455a]">
             
             <a href="https://twitter.com/pyaggg0"> <AiFillTwitterCircle /></a>
            <a href="https://github.com/PYAG1">  <AiFillGithub/></a>
             <a href="https://www.linkedin.com/in/papa-yaw-agyeman-gyekye-86053b235"> <AiFillLinkedin/></a>
    
                </div>
        </div>


      
    
    </div>

    <Footer/>


    </div>
  )
}

import React from 'react'

export default function User() {
  return (
    <div className=" h-screen p-7">
        <h1 className='font-[Oswald] text-5xl pb-9'>Hellp papa!</h1>

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

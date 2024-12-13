import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='flex flex-col justify-center items-center w-full h-[600px]'>
        <div className='w-[380px] h-[489px] '>
            <div className='w-[324px] h-[128px] mt-[20px] ml-[28px]'>
                <Image
                src="/nike12.png"
                width={324}
                height={17}
                alt='nike image'
                />
                <h3 className='w-[186.5px] ml-[68.84px] mt-[40px] h-[57px] font-[poppins] font-[700] text-[18px] leading-[26px] text-center text-black'>YOUR ACCOUNT FOR EVERYTHING NIKE</h3>
            </div>
            <div className='w-[324px] h-[305px] mt-[25px] ml-[28px]  '>
                <input 
                className='w-[324px] h-10 border-[1px] rounded-[3px] pl-4'
                placeholder='Email address'
                />
                <input 
                className='w-[324px] h-10 border-[1px] rounded-[3px] pl-4 mt-4'
                placeholder='Password'
                />

                <div></div>
            </div>
        </div>
    </div>
  )
}

export default page
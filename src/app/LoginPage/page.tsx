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
                <h3 className='w-[186.5px] ml-[68.84px] mt-[20px] h-[57px] font-[Helvetica] font-[700] text-[18px] leading-[26px] text-center text-black'>YOUR ACCOUNT FOR EVERYTHING NIKE</h3>
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
                <div className='flex justify-between'>
                <div className='flex mt-6'>
                <div className="flex flex-col items-center h-5">
                <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" className="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                </div>
                <div className='ml-3'>
                  <p className='font-[400]  mt-0.5 text-[12px] leading-[13.8px] text-[#BCBCBC]'>Keep me signed in</p>
                </div>
                </div>
                <div className='mt-6'>
                  <p className='font-[400]  mt-0.5 text-[12px] leading-[13.8px] text-[#BCBCBC]'>Fogotten your password?</p>
                </div>
                </div>
                <div className='w-[324px] h-[59px]  mt-8'>
                  <p className='w-[279.31px] h-[30px] mt-1 ml-[22.44px] font-[Helvetica] font-[400] text-[12px] leading-4  text-center text-[#8D8D8D]'>By logging in, you agree to Nike's <span className='underline'>Privacy Policy </span><br/>and <span className='underline'>Terms of Use.</span></p>
                </div>
                <div className='w-[324px] h-[40px] bg-black rounded-sm'>
                  <p className='text-white pt-3 ml-[141.58px] w-[324px] h-[59px] font-[Helvetica] font-[400] text-[11px] ' >SIGN IN</p>
                </div>
                <div className='w-[324px] h-[24px] mt-3'>
                 <p className='w-[129.61px] h-[14px] font-[Helvetica] font-[400] text-[12px] leading-[14px] text-[#8D8D8D] text-center mt-[10px] ml-[97.3px]'>Not a Member? <span className='underline font-[Helvetica] font-[400] text-[12px] leading-[14px] text-center text-black'>Join Us</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page
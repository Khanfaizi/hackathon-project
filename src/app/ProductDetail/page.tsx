import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='flex flex-col justify-center items-center w-[1440px] h-[1173px] top-[96px] '>
        <div className='flex justify-around w-[1200px] h-[1125px] mt-48'>
            <div className='w-[653px] h-[653px]'>
                <Image
                src="/Rectangle1.png"
                width={653}
                height={653}
                alt='shoes image'
                />
            </div>
            <div className='w-[376px] h-[1041px]'>
                <h2 className='w-[367px] h-[96px] font-[poppins] font-[500] text-[48px] leading-[48px] text-black'>Nike Air Force 1 
                PLT.AF.ORM</h2>

                <div className='w-[374.92px] h-[413px] pt-6 pb-[1px] gap-[2px] '>
                   
                    <p className='font-[poppins] font-[400] text-[15px] leading-7 text-black gap-2 mt-[20px]'>Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.</p>
                    <h3 className='w-[229px] h-[34px] font-[poppins] font-[500] text-[36px] leading-7 text-black mt-[60px]'>₹ 8 695.00</h3>
                    <button
      className="flex items-center mt-[40px] bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-gray-800 transition"
    >
      Add To Cart
    </button>
                    </div>

            </div>
        </div>
    </div>
  )
}

export default page
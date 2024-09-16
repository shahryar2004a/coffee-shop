import React from 'react'


export default function ProductCartModal({pic}) {
  return (
    <>
       <div className=' md:pb-1 border-b border-b-gray-300 dark:border-b-white/10 md:divide-y md:divide-gray-100 md:dark:divide-white/10 md:child:py-5'>
                    <div className='flex gap-x-1 md:gap-x-2.5'>
                    <img src={pic} className='w-[90px] h-[90px] md:w-30 md:h-30' alt="Product1" />

                        <div className='flex flex-col justify-between'>
                            <h4 className=' font-YekanMedium text-zinc-700 dark:text-white text-sm md:text-base line-clamp-2'>قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h4>
                            <div>
                                <span className='font-YekanMedium text-teal-600 dark:text-emerald-500 text-xs tracking-normal'>14.500 تومان تخفیف</span>
                                <div className='text-zinc-700 dark:text-white font-bold'>
                                  175.000
                                    <span className='font-Yekan md:text-sm'>تومان</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    </div>
    </>
  )
}

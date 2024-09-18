import React from 'react'
import Images from '../../Images/Images'
import SVG from '../../SVG/SVG'

export default function Product() {
  return (
    <>
      <div className='bg-white dark:bg-zinc-500 md:h-[330px] rounded-lg mx-14 sm:mx-0'>
              <div className='flex flex-col gap-1 items-center'>
                    <img src={Images.p1} className='w-[200px] h-[200px] md:w-40 md:h-40' alt="Product1" />

                        <div className='flex flex-col justify-between p-3 gap-3'>
                            <h4 className=' font-YekanMedium text-zinc-700 dark:text-white text-sm md:text-base line-clamp-2'>قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h4>
                            <div>
                                <span className='font-YekanMedium text-teal-600 dark:text-emerald-500 text-xs tracking-normal'>14.500 تومان تخفیف</span>
                                <div className='text-zinc-700 dark:text-white font-bold'>
                                  175.000
                                    <span className='font-Yekan md:text-sm'>تومان</span>
                                </div>
                            </div>
                            <div className='bottom flex justify-between'>

                          <div className='product-cart flex'>
                            <a href="#">
                            <div className=''>
                            <SVG className='w-5 h-5 text-zinc-700 dark:text-white' name='shopping-Cart'></SVG>
                            </div>
                            </a>
                      <a href="#">
                                 <div className='text-zinc-700 '>
                              <SVG className=' w-5 h-5 text-zinc-700 dark:text-white' name='arrows-right-left'/>
                            </div>
                      </a>
                   
                            </div>  
                            <div className='starts  flex ' style={{direction:'ltr'}}>
                          <SVG className='size-5 text-yellow-400' name='star'/>
                          <SVG className='size-5 text-yellow-400' name='star'/>
                          <SVG className='size-5 text-yellow-400' name='star'/>
                          <SVG className='size-5 text-zinc-400' name='star'/>
                          <SVG className='size-5 text-zinc-400' name='star'/>

                        </div>
                        </div>
                        </div>
                    
                    </div>
              </div>
    </>
  )
}

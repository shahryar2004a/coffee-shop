import React from 'react'
import SVG from '../../../SVG/SVG'

export default function CartModal() {
  return (
    <>
      <div className='absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible w-[400px] p-5
                   bg-white dark:bg-zinc-700 border-t-[3px] border-t-orange-300
                   shadow-normal rounded-2xl transition-all delay-75'>

                    <div className='flex items-center justify-between text-xs tracking-normal font-YekanMedium'>
                        <span className='text-gray-300 '>1 مورد</span>
                         <a href="#" className='flex items-center text-orange-300'>
                            مشاهده سبد خرید
                            <SVG name='chevron-left' className='w-4 h-4'></SVG>
                         </a>
                    </div>
                    {/*body card */}
                    <div className=' pb-1 border-b border-b-gray-300 dark:border-b-white/10 divide-y divide-gray-100 dark:divide-white/10 child:py-5'>
                    <div className='flex gap-x-2.5'>
                    <img src="../coffee-shop/public/images/products/p1.png" className='w-30 h-30' alt="Product1" />

                        <div className='flex flex-col justify-between'>
                            <h4 className=' font-YekanMedium text-zinc-700 dark:text-white text-base line-clamp-2'>قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h4>
                            <div>
                                <span className='font-YekanMedium text-teal-600 dark:text-emerald-500 text-xs tracking-normal'>14.500 تومان تخفیف</span>
                                <div className='text-zinc-700 dark:text-white font-bold'>
                                  175.000
                                    <span className='font-Yekan text-sm'>تومان</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    </div>
                    <div className='flex justify-between mt-5'>
                        <div>
                          <span className='font-YekanMedium text-gray-300 text-xs tracking-normal'>مبلغ قابل پرداخت</span>
                                <div className='text-zinc-700 dark:text-white font-bold'>
                                  350.000
                                    <span className='font-Yekan text-sm'>تومان</span>
                                </div>       
                        </div>
                
                                <a href="#" className='flex items-center justify-center w-[144px] h-14 text-white bg-teal-600 dark:bg-emerald-500 hover:bg-teal-700 dark:bg-emerald-600 transition-colors rounded-xl tracking-normal'>ثبت سفارش</a>
                    </div>
                   </div>

    </>
  )
}

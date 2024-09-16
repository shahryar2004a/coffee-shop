import React,{useRef} from 'react'
import SVG from '../../../SVG/SVG'

export default function CartModalMobile({showModal}) {
  
    const cartModal=useRef()
    const overlayRef=useRef()
   
  if(showModal)
    {
    cartModal.current.classList.remove('-left-64')
    cartModal.current.classList.add('left-0')
    overlayRef.current.classList.add('overlay--visible');
    }
    else{
    
    }
    const closeCartModal= () => {
      cartModal.current.classList.add('-left-64')
      cartModal.current.classList.remove('left-0')
      overlayRef.current.classList.remove('overlay--visible');
    }
  return (
    <>
       <div ref={cartModal} className='fixed top-0 bottom-0 -left-64 flex flex-col w-64  pt-3 px-4 bg-white dark:bg-zinc-700 z-20 transition-all'>
                {/* Cart Header */}
                 <div className='flex items-center justify-between pb-5 mb-5 border-b border-b-gray-300 dark:border-white/10'>

                 <div onClick={()=>closeCartModal()}>
                  <SVG className='w-5 h-5 text-zinc-600 dark:text-white' name='x-mark'></SVG>
                  </div>
                    <span className='text-zinc-700 dark:text-white font-YekanMedium'>سبد خرید</span>
                  
                 </div>
                    {/* Cart Body */}
                     <div className='child:pb-5 child:mb-5 min-h-80 overflow-y-auto '>
                                  
                     <div className='flex gap-x-1 border-b border-b-gray-100 dark:border-b-white/10'>
                        <img src="/public/images/products/p1.png" className='w-[90px] h-[90px]' alt="Product 1" />
                        <div className='flex flex-col justify-between gap-y-1.5'>
                        <h4 className='font-YekanMedium text-zinc-700 dark:text-white text-sm line-clamp-2'>
                         قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                        </h4>
                        <div>
                          <span className=' text-teal-600 dark:text-emerald-500 font-YekanMedium text-xs tracking-tighter'>14.500 تومان تخفیف</span>
                          <div className='text-zinc-700  dark:text-white font-YekanMedium'>
                            175.000
                            <span className=' font-Yekan'>تومان</span>
                          </div>
                        </div>
                        </div>
                      </div>

                      <div className='flex gap-x-1 border-b border-b-gray-100 dark:border-b-white/10'>
                        <img src="/public/images/products/p1.png" className='w-[90px] h-[90px]' alt="Product 1" />
                        <div className='flex flex-col justify-between gap-y-1.5'>
                        <h4 className='font-YekanMedium text-zinc-700 dark:text-white text-sm line-clamp-2'>
                         قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                        </h4>
                        <div>
                          <span className=' text-teal-600 dark:text-emerald-500 font-YekanMedium text-xs tracking-tighter'>14.500 تومان تخفیف</span>
                          <div className='text-zinc-700  dark:text-white font-YekanMedium'>
                            175.000
                            <span className=' font-Yekan'>تومان</span>
                          </div>
                        </div>
                        </div>
                      </div>
          
          
                     </div>
                  {/* Cart Footer */}
                 <div className='flex items-end gap-x-4 mt-auto mb-8'>
                <a href="#" className='flex items-center justify-center h-11 w-28 text-white bg-teal-600 dark:bg-emerald-500 rounded-xl'>ثبت سفارش</a>
                  <div>
                    <span className='font-YekanMedium text-gray-300 text-xs tracking-tighter'>مبلغ قابل پرداخت</span>
                    <div className=' text-zinc-700 dark:text-white font-YekanHeavy'> 
                      350.000
                      <span className='font-YekanMedium text-xs'>تومان</span>
                    </div>
                  </div>
                 </div>
              </div>
          <div onClick={()=>closeCartModal()} ref={overlayRef} className='overlay'></div>
    </>
  )
}

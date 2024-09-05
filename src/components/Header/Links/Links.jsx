import React from 'react'
import SVG from '../../SVG/SVG'
import CartModal from './CartModal/CartModal'

export default function Links() {
  return (
    <>
      <div className='flex gap-x-10 text-orange-200 text-xl'>
            <div className='flex items-center gap-x-5'>
                <div className='relative group'>
                   <div className='py-3 cursor-pointer'>
                   <SVG className='size-[34px]' name='shopping-Cart'></SVG>
                   </div>
                  <CartModal/>
                </div>

                <div  className='cursor-pointer' id='toggle-theme'>
                <SVG className=' inline-block dark:hidden size-[34px]' name='moon'></SVG>
                <SVG className='hidden  dark:inline-block size-[34px]' name='sun'></SVG>
                </div>
            </div>
            <span className='w-px h-14 bg-white/20'></span>
            <a href="" className='flex items-center gap-x-2.5 tracking-tightest'>
            <SVG className='size-[34px]' name='arrow'></SVG>
            <span>ورود | ثبت نام</span>
            </a>
            
        </div>
    </>
  )
}

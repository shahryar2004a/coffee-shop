import React from 'react'
import SVG from '../../../SVG/SVG'

export default function NavMobile() {
  return (
    <>
      
       <div className='fixed top-0 bottom-0 right-0 w-64 min-h-screen pt-3 px-4 bg-white dark:bg-zinc-700 z-20'>
         <div className='flex items-center justify-between pb-5 mb-6 border-b-gray-100 dark:border-b-white/10'>
          <div className='flex gap-x-3.5'>
          <SVG className='w-[41px] h-10 text-orange-300' name='logo'></SVG>
          <SVG className='w-[100px] h-10 text-orange-300' name='logo-type'></SVG>
          </div>
          <SVG className='w-5 h-5 text-zinc-600 dark:text-white' name='x-mark'></SVG>
         </div>
        </div>

        <div className='overlay fixed inset-0 w-full h-full bg-black/40 z-10'></div>
    </>
  )
}

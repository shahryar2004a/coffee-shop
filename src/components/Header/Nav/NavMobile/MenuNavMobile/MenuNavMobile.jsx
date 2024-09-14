import React from 'react'
import SVG from '../../../../SVG/SVG'

export default function MenuNavMobile() {
  return (
    <>
         <div className='flex bg-orange-200/20 text-orange-300 mb-4 pr-2.5 h-10 rounded-md'>
              <a href="#" className='flex items-center gap-2'>
                <SVG className='size-5' name='home'></SVG>
                صفحه اصلی
              </a>
            </div>
           <ul className='child:pr-2.5 space-y-6 text-zinc-600 dark:text-white'>
            <li className='flex items-center justify-between'>
              <a href="#" className='flex items-center gap-2'>
                <SVG className='size-5' name='shopping-Cart'></SVG>
                 فروشگاه
              </a>
              <span>
              <SVG className='size-4' name='chevron-down'></SVG>
              </span>
            </li>
            <li>
              <a href="#" className='flex items-center gap-2'>
                <SVG className='size-5' name='chat-bubble'></SVG>
                 دیکشنری
              </a>
            </li>
            <li>
              <a href="#" className='flex items-center gap-2'>
                <SVG className='size-5' name='briefcase'></SVG>
                درباره ما
              </a>
            </li>
            <li>
              <a href="#" className='flex items-center gap-2'>
                <SVG className='size-5' name='document-text'></SVG>
                  بلاگ
              </a>
            </li>
            <li>
              <a href="#" className='flex items-center gap-2'>
                <SVG className='size-5' name='phone'></SVG>
                تماس با ما 
              </a>
            </li>
           </ul>
    </>
  )
}

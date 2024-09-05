import React from 'react'
import SubMenu from './SubMenu/SubMenu'

export default function Nav() {
  return (
    <>
         <nav className='flex items-center gap-x-9 h-14'>
            <div>
                <img
                 src="../../images/app-logo.png"
                  alt="Golden Coffee"
                 
                  />
            </div>
            <ul className='flex gap-x-9 h-full text-xl text-gray-300 tracking-tightest child:leading-[56px]'>
                <li className='font-YekanMedium text-orange-200'>
                    <a href="#">صفحه اصلی</a>
                </li>
                <li className='relative group'>
                    <a href="#" className='group-hover:text-orange-300 transition-all'>فروشگاه</a>
                    {/*SubMenu*/}
                   <SubMenu></SubMenu>
                </li>
                <li>
                    <a href="#">دیکشنری</a>
                </li>
                <li>
                    <a href="#">بلاگ</a>
                </li>
                <li>
                    <a href="#">درباره ما</a>
                </li>
                <li>
                    <a href="#">تماس با ما</a>
                </li>
            </ul>
        </nav>
    </>
  )
}

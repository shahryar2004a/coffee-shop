import React,{useRef} from 'react'
import SVG from '../../../../SVG/SVG'

export default function MenuNavMobile() {
    
    const subMenu=useRef()

     const openSubMenu =(e) => {
     e.target.parentElement.parentElement.classList.toggle('text-orange-300')
       subMenu.current.classList.toggle('submenu--open')
     }
  return (
    <>
         <div className='flex bg-orange-200/20 text-orange-300 mb-4 pr-2.5 h-10 rounded-md'>
              <a href="#" className='flex items-center gap-2'>
                <SVG className='size-5' name='home'></SVG>
                صفحه اصلی
              </a>
            </div>
           <ul className='child:pr-2.5 space-y-6 text-zinc-600 dark:text-white'>
            <li>
              <div className='flex items-center justify-between'>
              <a href="#" className='flex items-center gap-2'>
                <SVG className='size-5' name='shopping-Cart'></SVG>
                 فروشگاه
              </a>
              <span onClick={(e)=>openSubMenu(e)}>
              <SVG className='size-4' name='chevron-down'></SVG>
              </span>
              </div>
              <div ref={subMenu} className='submenu'>
                            <a href="#">قهوه ویژه</a>
                            <a href="#" className='submenu__item--active'>ویژه در سطح جهانی</a> 
                            <a href="#">قهوه درجه یک</a>   
                            <a href="#">ترکیبات تجاری</a> 
                            <a href="#">کپسول قهوه</a>  
                            <a href="#">قهوه زینو بریزیلی</a>
              </div>
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

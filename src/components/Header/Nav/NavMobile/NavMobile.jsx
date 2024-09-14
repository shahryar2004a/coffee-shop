import React,{useState} from 'react'
import SVG from '../../../SVG/SVG'
import useDarkSide from '../../../Hook/useDarkside'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import MenuNavMobile from './MenuNavMobile/MenuNavMobile'

export default function NavMobile() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

  const toggleDarkMode = checked => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <>
      
       <div className=' font-YekanMedium fixed top-0 bottom-0 right-0 w-64 min-h-screen pt-3 px-4 bg-white dark:bg-zinc-700 z-20'>
         <div className='flex items-center justify-between pb-5 mb-6 border-b-gray-100 dark:border-b-white/10'>
          <div className='flex gap-x-3.5'>
          <SVG className='w-[41px] h-10 text-orange-300' name='logo'></SVG>
          <SVG className='w-[100px] h-10 text-orange-300' name='logo-type'></SVG>
          </div>
          <SVG className='w-5 h-5 text-zinc-600 dark:text-white' name='x-mark'></SVG>
         </div>

         <MenuNavMobile/>

         <div className='flex flex-col items-start gap-y-6 pt-8 px-2.5 mt-8 text-orange-300 border-t-gray-100 dark:border-t-white/10'>
           <a href="#" className='inline-flex items-center gap-x-2'>
           <SVG className='size-5' name='arrow'></SVG>
            ورود | ثبت نام
           </a>


           <span className='flex items-center gap-x-2'>
           <DarkModeSwitch className='text-orange-200 size-5' checked={darkSide} onChange={toggleDarkMode}/>
               <span className='inline dark:hidden'>تم تیره</span>
               <span className=' hidden dark:inline'>تم روشن</span>
           </span>


           <a href="#" className='inline-flex items-center gap-x-2'>
           <SVG className='size-5'  name='shopping-Cart'></SVG>
            سبد خرید
           </a>
         </div>
        </div>

        <div className='overlay fixed inset-0 w-full h-full bg-black/40 z-10'></div>
    </>
  )
}

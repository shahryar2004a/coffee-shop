import React,{useState,useEffect} from 'react'
import SVG from '../../SVG/SVG'
import CartModal from './CartModal/CartModal'
import useDarkSide from '../../Hook/useDarkside'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

export default function Links() {

    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);
  
    const toggleDarkMode = checked => {
      setTheme(colorTheme);
      setDarkSide(checked);
    };
  return (
    <>
      <div className='flex gap-x-4 lg:gap-x-5 xl:gap-x-10 text-orange-200 text-xl'>
            <div className='flex items-center gap-x-4 lg:gap-x-5'>
                <div className='relative group'>
                   <div className='py-3 cursor-pointer'>
                   <SVG className='size-[34px]' name='shopping-Cart'></SVG>
                   </div>
                   <CartModal></CartModal>
                </div>

                <div  className='cursor-pointer' id='toggle-theme'>
                <DarkModeSwitch className='text-orange-200 size-[34px]' checked={darkSide} onChange={toggleDarkMode}/>
                </div>
            </div>
            <span className='w-px h-14 bg-white/20'></span>
            <a href="" className='flex items-center gap-x-2.5 tracking-tightest'>
            <SVG className='size-[34px]' name='arrow'></SVG>
            <span className=' hidden xl:inline-block'>ورود | ثبت نام</span>
            </a>
            
        </div>
    </>
  )
}

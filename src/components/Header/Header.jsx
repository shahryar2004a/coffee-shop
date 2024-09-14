import React from 'react'
import Nav from './Nav/Nav'
import Links from './Links/Links'
import SVG from '../SVG/SVG'
import NavMobile from './Nav/NavMobile/NavMobile'

export default function Header() {
  return (
    <>
     <header className='fixed top-9 right-0 left-0 hidden md:flex items-center w-[98%] lg:w-[90%] h-24 bg-black/50 px-5 lg:px-10 py-5 mx-auto rounded-3xl backdrop:blur-[6px]'>
       <div className='flex justify-between items-center w-full'>
     
           <Nav/>
       
         <Links/>
       </div>
     </header>
     {/* header for mobile*/}
     <div className='flex md:block items-center justify-between h-16 px-4 bg-white dark:bg-zinc-700 '>
           
        
             <SVG className='w-6 h-6 text-zinc-700 dark:text-white' name='bars'></SVG>
              <NavMobile/>

            <SVG className='w-[100px] h-10 text-orange-300' name='logo-type'></SVG>
           
          
           <SVG className='w-6 h-6 text-zinc-700 dark:text-white' name='shopping-Cart'></SVG>
           
          
     </div>
    </>
  )
}

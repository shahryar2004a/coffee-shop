import React from 'react'
import Nav from './Nav/Nav'
import Links from './Links/Links'

export default function Header() {
  return (
    <>
     <header className='fixed top-9 right-0 left-0 flex items-center w-[90%] h-24 bg-black/50 px-10 py-5 mx-auto rounded-3xl backdrop:blur-[6px]'>
       <div className='flex justify-between items-center w-full'>
      
           <Nav/>
       
         <Links/>
       </div>
     </header>
    </>
  )
}

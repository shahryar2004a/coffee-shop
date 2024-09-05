import React from 'react'

export default function SubMenu() {
  return (
    <>
       <ul className='absolute top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible
                     w-52 p-6 space-y-4 text-base text-zinc-700 dark:text-white bg-white dark:bg-zinc-700
                     border-t-[3px] border-t-orange-300 tracking-normal shadow-normal rounded-2xl transition-all delay-75
                     child:inline-block child-hover:text-orange-300'>
                    
                            <a href="#">قهوه ویژه</a>
                            <a href="#">ویژه در سطح جهانی</a> 
                            <a href="#">قهوه درجه یک</a>   
                            <a href="#">ترکیبات تجاری</a><br/>  
                            <a href="#">کپسول قهوه</a>  
                            <a href="#">قهوه زینو بریزیلی</a>
                        
                    </ul>
    </>
  )
}

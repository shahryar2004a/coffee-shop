import React from 'react'

export default function Category({category}) {


  return (
    <>
              <div className='w-25 md:w-50 text-center'>
             <a href="#">
             <img src={category.img} loading='lazy' alt="category1" />
             </a>
              <span className='inline-block font-YekanMedium text-sm md:text-xl
               text-zinc-700 dark:text-white mt-1.5 md:mt-2.5'
               >{category.title}</span>
            </div>
    </>
  )
}

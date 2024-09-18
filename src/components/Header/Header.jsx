import React,{useState} from 'react'
import Nav from './Nav/Nav'
import Links from './Links/Links'
import SVG from '../SVG/SVG'
import NavMobile from './Nav/NavMobile/NavMobile'
import CartModalMobile from './Links/CartModal/CartModalMobile'

export default function Header() {

   const [showMenu,setShowMenu]=useState(false)
  const  [showModalCart,setShowModalCart] = useState(false)

   const openNavMobile=()=>{
        setShowMenu(!showMenu)
        setShowModalCart(false)
   }
   const openModalCart=()=>{ 
      setShowModalCart(!showModalCart)
     setShowMenu(false)
   }
  return (
    <>
           {/* App Header */}
     <header className='fixed top-9 right-0 left-0 z-50 hidden md:flex items-center w-[98%] lg:w-[90%] h-24 bg-black/50 px-5 lg:px-10 py-5 mx-auto rounded-3xl backdrop:blur-[6px]'>
       <div className='flex justify-between items-center w-full'>
     
           <Nav/>
       
         <Links/>
       </div>
     </header>
     {/* header for mobile*/}
     <div className='flex md:hidden items-center justify-between h-16 px-4 bg-white dark:bg-zinc-700 '>
           
            <div onClick={()=>openNavMobile()} className='nav-icon'>
            <SVG className='w-6 h-6 text-zinc-700 dark:text-white' name='bars'></SVG>
            </div>
            
              <NavMobile show={showMenu}/>
           
            <SVG className='w-[100px] h-10 text-orange-300' name='logo-type'></SVG>
           
            <div onClick={()=> openModalCart()}>
            <SVG className='w-6 h-6 text-zinc-700 dark:text-white' name='shopping-Cart'></SVG>
             </div>
          

           {/* cart modal mobile */}
              {/*cart */}
             <CartModalMobile showModal={showModalCart}/>
 

             
               


     </div>

           {/* App Main */}
         <main>
          <section className='home relative  h-[200px] xs:h-auto xs:aspect-[2/1] md:aspect-auto bg-home-mobile md:bg-home-desktop bg-no-repeat bg-cover bg-[center_top]'>
            <div className='container relative overflow-y-hidden h-full md:min-h-screen flex justify-end items-center'>
             <div className='text-white'>
              <h2 className='font-YekanHeavy text-2xl md:text-6xl/[62px] mb-0.5 md:mb-2'>قهوه عربیکا تانزانیا</h2>
              <span className='font-Yekan text-xl md:text-5xl/[64px]'>یک فنجان بالانس </span>
              <span className='block w-[100px] h-px md:h-0.5 bg-orange-300 my-3 md:my-8'></span>
              <p className='font-YekanRegular max-w-[201px] md:max-w-[460px] text-xs md:text-2xl'>قطعا نام آشنای عربیکا را شنیده اید،عربیکا یکی از گونه های قهوه است که در نواحی مختلف کمربند قهوه کشت میشود</p>
             </div>
             
           {/* Circles */}
            <div className='circle circle--main circle--lg '>
              <div className='circle circle--md'>
                <div className='circle circle--sm'></div>
              </div>
            </div>

            </div>

           {/* Curve SVG */}
            <div className=' absolute bottom-0 right-0 left-0 mx-auto hidden inline-block text-gray-100 dark:text-zinc-800 w-[100px] h-[22px]'>
            <SVG name='curve'/>
            </div>



           {/* Arrow Circle */}
            <div className=' absolute bottom-0 right-0 left-0 mx-auto translate-y-2/4 hidden md:flex justify-center items-center w-[30px] h-[30px] border-2 border-orange-300 rounded-full'>
              <a href='#'>
              <SVG  className='w-5 h-5 text-zinc-700 dark:text-white' name='chevron-down-mini'/>
              </a>
            </div>
          </section>
          <section className='products'>

          </section>
         </main>
    </>
  )
}

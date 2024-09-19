import React,{useState,useRef} from 'react'
import Nav from './Nav/Nav'
import Links from './Links/Links'
import SVG from '../SVG/SVG'
import NavMobile from './Nav/NavMobile/NavMobile'
import CartModalMobile from './Links/CartModal/CartModalMobile'
import Product from './Product/Product'
import Images from '../Images/Images'
import productDB from '../Data/productData'
import Category from '../Category/Category'
import categoryDB from '../Data/categoryData'



// import Swiper core and required modules
import { Navigation, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Header() {

     const [showMenu,setShowMenu]=useState(false)
     const  [showModalCart,setShowModalCart] = useState(false)
     const [productData,setproductData]=useState(productDB)
     const [categoryData,setcategoryData] = useState(categoryDB)

   /* slider swiper */
    const swiperRef=useRef(null)
    
    const goNext =()=>{
      if(swiperRef.current && swiperRef.current.swiper){
        swiperRef.current.swiper.slideNext();
      }
    }

    const goPrev = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slidePrev();
      }
    }


   // Modal handlers    
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
              <a href='#product-section'>
              <SVG  className='w-5 h-5 text-zinc-700 dark:text-white' name='chevron-down-mini'/>
              </a>
            </div>
          </section>



           {/* Products */}
          <section className='products ' id='product-section'>
            
            <div className='container  pt-16 xl:pt-36'>
              {/* product section Head */}
            <div className='products-header flex justify-between'>
             <div className='title text-zinc-700  dark:text-white'>
                <h1 className='font-YekanHeavy text-2xl sm:text-3xl xl:text-4xl'>جدیدترین محصولات</h1>
                <p className='font-YekanMedium text-xs sm:text-[15px]'>فراوری شده از دانه ی قهوه</p>
             </div>
             <div className='other flex items-end'>
                 <div className='flex justify-end text-orange-300'>
                  <a href="#" className='flex items-center'>
                    <span className='text-xs sm:text-[15px]'>مشاهده همه محصولات</span>
                    <SVG className='size-3 sm:size-4  xl:size-5' name='arrow-left-mini'/>
                  </a>
                 </div>
             </div>
           </div>   
              {/* product section Body */}
           <div className='product-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-4 gap-4 mt-12 '>
               {
                !productData ? (<div>Loading...</div>) :(
                 productData.map((product)=> <Product key={product.id}  product={product}/>
                ) )
               }
           </div>
            </div>















          </section>


          
           {/* category-banner */}
            <section className='category-banner mt-8 mb-10 md:my-20 '>
              <div className='container flex justify-center gap-4'>

                <div className='banner-item right relative w-[100%] xl:w-[50%]'>
                  <div className=' absolute text-white right-10 top-[40%]'>
                  <h1 className='font-YekanHeavy text-3xl'>انواع قهوه</h1>
                  <p>ترکیبی و تک خاستگاه</p>
                  </div>
               </div>
               <div className='banner-item left relative w-[100%] xl:w-[50%]'>
                <div className=' absolute text-white right-10 top-[40%]'>
                <h1 className='font-YekanHeavy text-3xl'>پودر های فوری</h1>
                <p>نسکافه،هات چاکلت و ماسالا</p>

                </div>
                </div>
              </div>
             
            
      
            </section>
 
           {/* products-category */}
           <section className='products-category mb-10 md:mb-20'>
         <div className='container'>
          <div className='flex items-center justify-center gap-y-6 gap-x-[20px] md:gap-[60px] flex-wrap'>
            
            {!categoryData ? (<div>Loading...</div>) : (
                categoryData.map(category => (
                  <Category key={category.id} category={category}/>
                ))
            )

            }

          </div>
         </div>
        </section>

  
           {/* best-selling section */}
         <section className='best-selling mb-9 md:mb-20'>
          <div className='container'>
          {/* best selling Head */}
          <div className='products-header flex justify-between mb-16'>
             <div className='title text-zinc-700  dark:text-white'>
                <h1 className='font-YekanHeavy text-2xl sm:text-3xl xl:text-4xl'>محصولات پرفروش</h1>
                <p className='font-YekanMedium text-xs sm:text-[15px]'>پیشنهاد قهوه خورها...</p>
             </div>
             <div className='flex gap-x-3 md:gap-x-[18px]'>
               <div onClick={()=>goPrev()} className=' swiper-btn'>
                  <SVG className='w-5 h-5 md:w-[26px] md:h-[26px] rotate-180' name='arrow-left-mini'/>
                </div>
               <div onClick={()=>goNext()} className=' swiper-btn '>
                  <SVG className='w-5 h-5 md:w-[26px] md:h-[26px]' name='arrow-left-mini'/>
                </div>
             </div>
           </div>   

           <Swiper
      // install Swiper modules
      modules={[Navigation, Scrollbar, A11y]}
      ref={swiperRef}
      spaceBetween={14}
      slidesPerView={2}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 14,
        },
        768:{
          slidesPerView:3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
      },
      }
    }
    >
                  {
                  !productData ? (<div>Loading...</div>) :(
                  productData.map((product)=>  <SwiperSlide> <Product key={product.id}  product={product}/>  </SwiperSlide>
                  ) )
                }

    </Swiper>
          </div>
         </section>




         </main>
    </>
  )
}

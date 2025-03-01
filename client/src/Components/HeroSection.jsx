import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

const data=[
    {
        id:1,
        img:'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },

    {
        id:2,
        img:'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },

    {
       id:3,
       img:'https://images.pexels.com/photos/3457299/pexels-photo-3457299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
   },
   
   {
       id:4,
       img:'https://images.pexels.com/photos/6758778/pexels-photo-6758778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
},

]

const HeroSection = () => {
  return (
    <div>
       <Swiper className="h-[50vh] w-full sm:h-[70vh] relative">
        <div className=' sm:w-[50vw] mx-auto  absolute sm:top-50 z-1 sm:left-50 sm:right-50 sm:bottom-50 top-12 left-12 right-12 bottom-12  text-center flex flex-col gap-10'>
        <h2 className='text-white sm:text-6xl font-bold text-4xl'>Find Your Dream House </h2>

        <div className='border-white sm:w-[70%] mx-auto flex sm:flex-row flex-col justify-between gap-3'>
         <input type="search" name='' id='' className='py-4 px-8 sm:w-[75%]  bg-white outline-none rounded-lg' placeholder='Search by City or Address' /> 
         <button onClick={()=>alert('hello')}  className='py-4 px-8 bg-yellow-500 rounded-md font-bold text-white uppercase sm:w-[20%] text-center cursor-pointer'>Search</button>
        </div> 
        </div>
           {
            data.map((data,index)=>{  
            return (<SwiperSlide key={index} className='text-center text-[18px] flex justify-center items-center border-2'><img src={data.img} alt="images" className='block w-full h-full object-cover brightness-50'/></SwiperSlide>
            )
          })
          }
         </Swiper>
        </div>
  )
}

export default HeroSection;


import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div 
    className='max-w-screen-2xl mx-auto flex lg:flex-row flex-col justify-around items-center p-10 ' 
    style={{backgroundImage:'url("/bgimg.avif")'}}>
       
        <div className=' '>
      <h1 className="text-xl font-bold text-black pl-5">Hello, I am </h1>
      \<h1 className=' text-6xl font-serif'>Sobia <span className='text-black '> Mehak</span></h1>
      
    
      <p className="text-xl mt-4 text-cyan-600 pl-20 ">A Web Developer</p>
      
      <p className="mt-4 text-black pl-15 ">Currently learning Next.js at Governor House</p>
      </div>

      <div className='   '>
        <Image src="/displaypic.jpg" alt="dp" 
        width={500} height={500} className=' rounded-full mt-40 border-2 border-cyan-600 content-end justify-end'  />
        </div>

    </div>
    
   
  )
}

export default Hero

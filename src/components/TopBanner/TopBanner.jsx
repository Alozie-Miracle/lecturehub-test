import React from 'react'

const TopBanner = () => {
  return (
    <div className='relative top-6 sm:top-0'>
      <img className='h-[40vh] sm:h-screen object-cover w-full' src="\images\bg-img-1.jpg" alt="Banner" />
      {/* <div className='hidden sm:block absolute z-30 md:top-96 top-32 shadow-md sm:top-[40%] p-4 mx-5 xl:mx-20'>
        <h1 className='text-3xl sm:text-7xl 2xl:text-[150px] font-bold  text-white' style={{fontFamily:  'cursive', letterSpacing: '5px'}}>Lecture-Hub</h1>
        <p className='text-sm sm:text-xl lg:text-3xl text-white mt-2 sm:mt-7'>We connect people through impaction as a global destination for online learning platform. <br /> Whether you want to learn or to share what you know, you have come to the right place. 
        </p>
      </div> */}
    </div>
  )
}

export default TopBanner

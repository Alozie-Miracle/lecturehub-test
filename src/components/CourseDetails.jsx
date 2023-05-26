import { StarIcon } from '@heroicons/react/24/solid'
import { StarIcon as EmptyStar } from '@heroicons/react/24/outline'
import React, { useState } from 'react'

const CourseDetails = ({img, instructorName, Students, Price, rating, CourseTitle, couserDescription}) => {

  const [rate, setRate] = useState(Number(rating))


  return (
    <div className='sm:p-4 p-2 flex flex-col xl:flex-row mt-16 sm:mt-44 gap-5'>
      <img src={img} alt={`${CourseTitle} course`} 
      className='rounded-xl sm:h-[450px] sm:w-full shadow-md'
      />
      <div className='mx-2 sm:mx-5'>
        <div className='border-b border-solid border-gray-100 mb-2'>
          <h1 className='text-2xl sm:text-5xl' style={{fontFamily:"cursive"}}>{CourseTitle}</h1>
          <h2 className='sm:text-2xl my-2 sm:my-5' style={{fontFamily:"cursive"}}>{instructorName}</h2>
        </div>

        <div className='border-b border-solid border-gray-100 mb-2'>
          <h2 className='text-2xl my-2' style={{fontFamily: 'cursive'}}>Description</h2>
          <p className='sm:text-2xl mb-5 pb-5 flex justify-start items-start'>{couserDescription}</p>
        </div>
        
        <div className='flex flex-col sm:flex-row justify-between items-center sm:mt-10'>
          <div className='flex w-full sm:border-r sm:border-solid sm:border-gray-100 sm:px-5 sm:mr-5'>
            <p className='sm:text-2xl flex-grow' style={{fontFamily:'cursive'}}>{Students} Students</p>
            {[...Array(rate)].map((i,id) => (
              <StarIcon key={id} className='h-6 sm:h-8 cursor-pointer'/>
            ))}
            {[...Array(5 - rate)].map((i,id) => (
              <EmptyStar key={id} className='h-6 sm:h-8 cursor-pointer' />
            ))}
          </div>
          <div className='flex justify-between items-center gap-5 w-full sm:gap-20 mt-10 sm:mt-0'>
            <p className='text-xl sm:text-3xl' > <span style={{fontFamily:"cursive"}}>Price:</span>  {Price}</p>
            <button className='bg-white border border-solid border-gray-100 rounded-lg shadow-md h-9 w-52 sm:w-60 sm:h-16 text-sm sm:text-xl hover:bg-black hover:text-white hover:scale-105' style={{fontFamily:"cursive"}}>Buy Now</button>
            
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default CourseDetails

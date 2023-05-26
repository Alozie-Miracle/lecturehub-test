import React from 'react'
import FeedSmall from './FeedSmall/FeedSmall'

import { recommendedCourses } from '../../DummyData'
import { StarIcon } from '@heroicons/react/24/solid'
import { StarIcon as EmptyStar } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const Feed = () => {
  return (
    <div className='xl:px-28 md:px-12 mb-12'>
      <h2 className='text-xl sm:text-4xl mt-10 py-5 px-2'>Recommended Courses</h2>
      {/* add scrollable courses here */}

      <div className='flex overflow-x-scroll gap-2 p-2 cursor-pointer hide-scrollbar'>
        {recommendedCourses.map((course, index) => (
          <>
            <img key={index} className="h-24 w-38 sm:h-40 sm:w-72 object-cover rounded-md hover:scale-95" src={course.src} alt="recomended courses" />
            <div className='bg-gray-50 rounded-md p-2 sm:p-5'>
              <h2 className='text-sm sm:text-xl'>{course.CoureName}</h2>
              <p className='text-xs sm:text-sm'>{course.InstructorName}</p>
              <div className='flex mt-2 justify-between gap-4'>
                <div>
                  <p className='text-xs sm:text-base'>{course.price}</p>
                  <Link to={`/course/${course.id}/?${course.src}%${course.InstructorName}%${course.numberOfStudents}%${course.price}%${course.rating}%${course.CoureName}%${course.Instructor}`}>
                  <button className='sm:border-solid sm:border-2 sm:border-black hover:bg-black bg-white hover:text-white hover:border-blue-50 transform transition-all ease-in-out duration-75 shadow-md rounded-md w-16 h-8 text-xs sm:text-sm sm:w-40 sm:h-11'>Review</button>
                  </Link>
                </div>
                <div>
                  <p className='text-xs sm:text-base'>{course.numberOfStudents}</p>
                  <div className='flex'>
                    <p className='flex'>{
                      [...Array(course.rating)].map((i,id) => (
                      <StarIcon key={id} className='sm:h-5 h-3' />
                      ))}
                    </p>

                  <p className='flex'>{[...Array(5-course.rating)].map((i,id) => (
                    <EmptyStar key={id} className='sm:h-5 h-3' />
                  ))}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>

      <h2 className='text-xl sm:text-4xl mt-10 py-5 px-5'>All Courses</h2>
      <FeedSmall />
      
    </div>
  )
}

export default Feed

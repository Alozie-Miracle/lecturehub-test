import React from 'react'
import { recommendedCourses } from '../DummyData'
import { StarIcon } from '@heroicons/react/24/solid'
import { StarIcon as EmptyStar } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const RecommendedFeed = () => {
  return (
    <div className='flex space-x-3 overflow-scroll p-2 cursor-pointer hide-scrollbar'>
        {recommendedCourses.map((course,index) => (
          <div key={index} className='gap-5 p-2 w-[600px]'>
            <img src={course.src} alt="courses" className='w-[100%] h-28 object-cover rounded-t-md hover:scale-105' />
            <div>
              <h2>{course.CoureName}</h2>
              <p>{course.InstructorName}</p>
              <div className='flex items-center justify-between w-[300px]'>
                <div className='flex flex-col'>
                  {course.price}
                  <Link to={`/course/${course.id}/?${course.src}%${course.InstructorName}%${course.numberOfStudents}%${course.price}%${course.rating}%${course.CoureName}%${course.Instructor}`}>
                  <button className='sm:border-solid sm:border-2 sm:border-black hover:bg-black hover:text-white hover:border-blue-50 transform transition-all ease-in-out duration-75 shadow-md rounded-md w-20 h-6 text-sm sm:w-28 sm:h-10'>Review</button>
                  </Link>
                </div>
                <div className='flex flex-col items-end'>
                  <p>{course.numberOfStudents}</p>
                  <p className='flex'>
                  {[...Array(course.rating)].map((i,id) => (
                    <StarIcon key={id} className='sm:h-5 h-3' />
                  ))}
                  {5 - course.rating === 0 ? (
                    <span></span>
                  ) : (
                    [...Array(5 - course.rating)].map((i,id) => (
                    <EmptyStar key={id} className='sm:h-5 h-3' />
                  ))
                  )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default RecommendedFeed

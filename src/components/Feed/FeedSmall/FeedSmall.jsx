import {UserIcon, StarIcon as EmptyStar} from '@heroicons/react/24/outline'
import {StarIcon} from '@heroicons/react/24/solid'

import {AllCourse } from '../../../DummyData'
import { Link } from 'react-router-dom'

const FeedSmall = () => {

  return (
    <div className='p-2 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4'>
      {AllCourse.map((course, index) => (
      <div key={index} className='flex md:flex-col mb-2 border-b-2 border-solid border-b-gray-300 pb-4 md:max-w-[450px] md:bg-gray-50 md:rounded-md md:shadow-md'>
        <img className='w-[100px] h-[70px] sm:w-[220px] sm:h-[150px] lg:h-[250px] md:w-full object-cover rounded-md hover:scale-105 cursor-pointer mb-10' src={course.img} alt="Courses" />
        <div className='flex flex-col justify-between px-2 w-full'>
          <div>
            <h3 className='text-base sm:text-xl font-semibold mb-1'>{course.CoureName}</h3>
            <p className='text-gray-500 text-xs sm:text-sm'>{course.InstructorName}</p>
          </div>
          <div className='flex justify-between items-center mt-2'>
            <div>
              <p className='text-base sm:text-xl font-semibold'>{course.price} </p>
              <Link to={`/course/${course.id}/?${course.img}%${course.InstructorName}%${course.numberOfStudents}%${course.price}%${course.rating}%${course.CoureName}%${course.Instructor}`}>
              <button className='sm:border-solid sm:border-2 sm:border-black hover:bg-black hover:text-white hover:border-blue-50 transform transition-all ease-in-out duration-75 shadow-md rounded-md w-16 h-8 text-sm sm:w-40 sm:h-11'>Review</button>
              </Link>
            </div>
            <div className='mr-0'>
              <p className='flex gap-2 text-sm'><UserIcon className='sm:h-6 h-4 mb-2' />{course.numberOfStudents}</p>
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

export default FeedSmall

import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AllCourse } from '../DummyData';
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as EmptyStar } from '@heroicons/react/24/outline';

const SemilarLecture = ({ CoureName, InstructorName, id, img, numberOfStudents, price, rating, Instructor }) => {
  return (
    <div key={id} className='flex items-center'>
      <div className='p-2 flex'>
        <img src={img} alt={CoureName} className='w-32 sm:w-48 rounded-md' />
        <div className='ml-2'>
          <h2 className='text-base sm:text-2xl'>{CoureName}</h2>
          <p className='text-xs sm:text-base'>{InstructorName}</p>
          <p className='text-xs sm:text-base'>{numberOfStudents} students</p>
          <div className="flex justify-between items-center w-[200px] sm:w-[500px]">
            <p className='font-semibold text-xs sm:text-base'>{price}</p>
            <Link
            
              to={`/course/${id}/?${img}%${InstructorName}%${numberOfStudents}%${price}%${rating}%${CoureName}%${Instructor}`}            
            >
            <button className='sm:border-solid sm:border-2 sm:border-black hover:bg-black bg-white hover:text-white hover:border-blue-50 transform transition-all ease-in-out duration-75 shadow-md rounded-md w-16 h-8 text-xs sm:text-sm sm:w-40 sm:h-11'>Review</button>
            </Link>
          </div>

          <div className='flex'>
            <p className='flex'>{
            [...Array(rating)].map((i,id) => (
              <StarIcon key={id} className='sm:h-5 h-3' />
            ))}
          </p>
          <p className='flex'>{[...Array(5-rating)].map((i,id) => (
            <EmptyStar key={id} className='sm:h-5 h-3' />
          ))}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const InstructorDetail = ({ img, instructorName}) => {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    const semilarCourses = AllCourse.filter((course)=> {
      return course.InstructorName === instructorName
    })
    setCourse(semilarCourses);
  }, [])

  const params = useLocation()?.search?.slice(1)?.split('%');

  let prefix = params[1];
  let name = params[2]?.slice(2);


  return (
    <div className='p-2 border-t border-gray-100 border-solid mt-5'>
      <div className='flex items-center gap-2 mt-2 border-solid border-b border-gray-100 pb-2'>
        <img src={img} alt="instructor" className='h-16 w-16 rounded-full object-cover' />
        <div>
          <h2 style={{fontFamily: 'cursive'}}>{instructorName}</h2>
          <Link to={`/instructor/${instructorName}/?%${img}`}>
            <p className='text-sm text-blue-400'>view profile</p>
          </Link>
        </div>
      </div>
      <h2 className='text-lg sm:text-3xl p-2 my-2' style={{fontFamily: "cursive"}}>More courses from {prefix} {name}</h2>
      <div>
        {course && (
          course.map((course, index) => (
            <SemilarLecture key={index} {...course} />
          ))
        )}
      </div>
    </div>
  )
}

export default InstructorDetail

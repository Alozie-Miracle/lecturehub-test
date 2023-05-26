import React, { useEffect, useState } from 'react'
import NavbarTop from '../components/NavbarTop/NavbarTop'
import Sidebar from '../components/Sidebar'
import { useLocation } from 'react-router';
import NavbarBottom from '../components/NavbarBottom/NavbarBottom';
import Footer from '../components/Footer';

import { AllCourse, instructors } from '../DummyData';
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as EmptyStar } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const InstructorProfile = (props) => {

  return (
    <div className='px-2 py-5 sm:p-5 -mt-40 sm:-mt-52 flex flex-row-reverse justify-between xl:justify-around'>
      <img src={props.img} alt="instructor" className='rounded-full h-16 w-16 sm:rounded-lg sm:w-[250px] sm:h-[250px] shadow-md cursor-pointer' />
      <div>
        <h2 className='text-white text-xl sm:text-7xl' style={{fontFamily:"cursive"}}>{props[0]?.name}</h2>
        <p className='text-white text-xs sm:text-xl'>from {props[0]?.from}</p>
        <p className='text-white text-xs sm:text-base'>email: {props[0]?.email}</p>
        <p className='text-white text-xs sm:text-base'>Age: {props[0]?.Age}</p>
        <p className='text-white text-xs sm:text-base'>
         graduated from {props[0]?.Qualification?.university} has {props[0]?.Qualification?.has}
        </p>
      </div>
    </div>
  )
}

const SemilarLecture = ({ CoureName, InstructorName, id, img, numberOfStudents, price, rating, name, Instructor }) => {
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

const Instructor = ({active, setActive, user}) => {
  const [instructor, setInstructor ] = useState({})
  const [allCourse, setAllCourse] = useState([])
  const [route, setRoute] = useState();
  const params = useLocation().search.slice(1).split('%');
  const Name = useLocation().pathname.split('/')

  let teacherName = Name[2].split('%')
  let prefix = teacherName[0]
  let mainName = teacherName[1].slice(2)

  let name = prefix + ' ' +  mainName;
  
  useEffect(() => {
    const teacher = instructors.filter((instructor) => {
      return instructor.name === name
    })

    setInstructor(teacher)
   
  }, [name])

  useEffect(() => {
    const courses = AllCourse.filter((course) => {
      return course.InstructorName === name
    })

    setAllCourse(courses)
   
  }, [name])

  
  return (
    <div>
      <NavbarTop active={active} setActive={setActive} user={user} />
      {active && (
        <Sidebar location={route} user={user} />
      )}
      <NavbarBottom />
      {/* instructor details */}
      <div className='h-[280px] sm:h-[500px] bg-black shadow-md' />
      {instructor && (
        <InstructorProfile img = {params[1]} {...instructor} />
      )}

      <div className='px-2 sm:px-7 xl:px-[16%] py-5'>

        <p className='border-b border-solid border-gray-100 mb-5 pb-5'>
          {instructor[0]?.about}
        </p>
        <h2 className='text-2xl sm:text-3xl my-2' style={{fontFamily:"cursive"}}>{instructor[0]?.name} Courses</h2>

        {allCourse && (
          allCourse?.map((course, index) => (
            <SemilarLecture key={index} {...course} name />
          ))
        )}
      </div>

      <Footer />
    </div>
  )
}

export default Instructor

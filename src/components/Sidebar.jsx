import React from 'react'
import { BarsArrowDownIcon, GlobeEuropeAfricaIcon, HomeIcon, MegaphoneIcon, PhoneIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Category from './Category';

const Sidebar = ({user}) => {

  const nonActiveStyle = 'text-sm my-2  w-full p-2 flex items-center hover:bg-gay-100'

  const activeStyle = 'text-sm my-2 bg-white w-full shadow-md shodow-sm border-r-2 border-solid border-red-400 p-2 flex items-center'

  return (
    <div className='sm:hidden absolute z-40 top-0 sm:top-16 flex flex-col justify-around bg-gray-50 w-[70%] shadow-md xs:pt-[170px] pt-[180px] px-2 h-screen overflow-y-scroll'>

      <div className={`${user ? 'mt-52' : 'mt-24'}`}>
        {user ? (
          <div className=' mb-4 flex justify-around items-center gap-5 border-b border-solid border-b-gray-200 pb-3'>
            <h2 className='text-xl' style={{fontFamily: 'cursive'}}>Your bag:</h2>
            <div className='relative h-10 w-10 flex justify-center items-center'>
              <p className='absolute top-0 right-0 bg-black text-white rounded-full h-5 w-5 flex justify-center items-center shadow-sm'>0</p>
              <ShoppingCartIcon className='h-5 shadow-sm' />
            </div>
          </div>
        ) : (
          <div className=''>
            <h2 className='my-2 mb-3 text-base bg-white flex justify-center shadow-sm' style={{fontFamily: 'cursive'}}>Join Us</h2>
            <div className='flex pb-5'>
              <button className='bg-red-400 shadow-md text-white mr-2 p-2 rounded-md hover:bg-white hover:text-red-500 flex-grow'>Register</button>
              <button className='border shadow-md p-2 bg-black text-white rounded-md hover:bg-white hover:text-black flex-grow'>Login</button>
            </div>
          </div>
        )}
        
      </div>

      <div className='border-b border-solid border-b-gray-200 pb-2'>
        <h2 className='my-2 text-base bg-white flex justify-center' style={{fontFamily: 'cursive'}}>Search Lecturehub</h2>
        <div className='flex bg-white flex-grow max-w-[800px] pr-0 h-8 items-center border-2 rounded-full shadow-sm'>
          <input type="text" className=' pl-5 bg-transparent outline-none flex-grow  text-gray-600 text-base placeholder-gray-400 w-[100%]' placeholder='Search a course' />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="flex overflow-hidden bg-red-400 rounded-full text-white p-2 cursor-pointer h-[90%]"
            onClick={() => {}}
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clipRule="evenodd"
                />
          </svg>
        </div>

      </div>
      <div className='border-b border-solid border-b-gray-200 pb-3'>
        <ul>
          <h3 className='my-2 text-base bg-white flex justify-center' style={{fontFamily:"cursive"}}>Important Links</h3>
          <NavLink to='/' className={({isActive}) => isActive ? activeStyle : nonActiveStyle}><HomeIcon className='h-4 mr-2'  /> Home</NavLink>
          <NavLink to='/about' className={({isActive}) => isActive ? activeStyle : nonActiveStyle}><GlobeEuropeAfricaIcon className='h-4 mr-2' /> About</NavLink >
          <NavLink to='/contact' className={({isActive}) => isActive ? activeStyle : nonActiveStyle}><PhoneIcon className='h-4 mr-2' /> Contact</NavLink >
          <NavLink to='/testimonies' className={({isActive}) => isActive ? activeStyle : nonActiveStyle}><MegaphoneIcon className='h-4 mr-2' /> Testimonies</NavLink >
          <NavLink to='/instructors' className={({isActive}) => isActive ? activeStyle : nonActiveStyle}><UserGroupIcon className='h-4 mr-2' />Available Instructors</NavLink >
          <NavLink to='/board-members' className={({isActive}) => isActive ? activeStyle : nonActiveStyle}><UsersIcon className='h-4 mr-2' /> Board Members</NavLink >
          <NavLink to='/features' className={({isActive}) => isActive ? activeStyle : nonActiveStyle}><BarsArrowDownIcon className='h-4 mr-2' /> Features</NavLink >
        </ul>
      </div>

        {/* category */}

      <div className='border-b border-solid border-b-gray-200 pb-3'>
        <Category />
      </div>

      {user && (
          <div className='flex items-center gap-5 pb-10 shadow-sm mt-5'>
            <img className='h-8 w-8 rounded-full' src="\images\IMG_0894.jpeg" alt="profile" />
            <h2 className='text-xs' style={{fontFamily: 'cursive'}}>Alozie Miracle Patrick</h2>
          </div>
        ) }
        
    </div>
  )
}

export default Sidebar

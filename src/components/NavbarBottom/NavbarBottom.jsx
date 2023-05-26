import { BarsArrowDownIcon, GlobeEuropeAfricaIcon, HomeIcon, MegaphoneIcon, PhoneIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { NavLink } from 'react-router-dom'


const NavbarBottom = () => {
  const nonActiveStyle = 'text-sm my-2 bg-white w-full hover:shadow-md shodow-sm p-2 flex items-center hover:bg-gray-100 flex-grow flex justify-center border-solid border-r border-gray-100'

  const activeStyle = 'text-sm my-2 bg-white w-full shadow-md shodow-sm border-b-2 border-solid border-red-400 p-2 flex items-center flex-grow flex justify-center'

  return (
    <div className='hidden sm:flex justify-around fixed w-full z-50 top-20 py-4 bg-white text-black px-2 shadow-md'>
      <NavLink to='/' className={({isActive}) => isActive ? activeStyle : nonActiveStyle}><HomeIcon className='h-4 mr-2'  /> Home</NavLink>
      <NavLink to='/about' className={({isActive}) => isActive ? activeStyle : nonActiveStyle}><GlobeEuropeAfricaIcon className='h-4 mr-2' /> About</NavLink >
      {/* <NavLink to='/contact' className={({isActive}) => isActive ? activeStyle : nonActiveStyle}><PhoneIcon className='h-4 mr-2' /> Contact</NavLink > */}
      <NavLink to='/testimonies' className={({isActive}) => isActive ? activeStyle : nonActiveStyle}><MegaphoneIcon className='h-4 mr-2' /> Testimonies</NavLink >
      <NavLink to='/instructors' className={({isActive}) => isActive ? activeStyle : nonActiveStyle}><UserGroupIcon className='h-4 mr-2' /> <span className='hidden lg:inline-flex mr-2'>Available</span> Instructors</NavLink >
      <NavLink to='/board-members' className={({isActive}) => isActive ? activeStyle : nonActiveStyle}><UsersIcon className='h-4 mr-2' /> Become an Instructor</NavLink >
      <NavLink to='/features' className={({isActive}) => isActive ? activeStyle : nonActiveStyle}><BarsArrowDownIcon className='h-4 mr-2' /> Upgrade to premium</NavLink >
    </div>
  )
}

export default NavbarBottom

import React from 'react'

import {Bars3Icon} from '@heroicons/react/24/solid'
import {ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const NavbarTop = ({active, setActive, user}) => {
 const setPosition = () => {
  window.scrollTo(0,0)
 }
  
  return (
    <div className='z-50 fixed top-0 flex justify-between items-center  w-full bg-white h-16 sm:h-20 shadow-md border-b border-solid border-b-gray-50' >
      <h2 className='text-2xl ml-2 cursor-pointer' style={{fontFamily:'cursive'}}><Link to={'/'}>Lecturehub</Link></h2>
      <div className='hidden sm:inline-flex flex-grow max-w-[800px] mx-5 pr-0 h-11 items-center border-2 rounded-full shadow-md '>
        <input type="text" className=' pl-5 bg-transparent outline-none flex-grow  text-gray-600 text-base placeholder-gray-400 w-[100%]' placeholder='search a course' />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="hidden sm:inline-flex h-[80%] overflow-hidden bg-red-400 rounded-full text-white p-2 cursor-pointer"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {active ? (
        <XMarkIcon className='sm:hidden h-8 mr-2' onClick={() => setActive(!active)} />
      ) : (
      <Bars3Icon className='sm:hidden h-8 mr-2'
       onClick={() => {
        setActive(!active)
        setPosition()
       }}
      />
      )}
      <div className='hidden sm:flex'>
        {user ? (
          <>
            <div className='flex items-center gap-5 cursor-pointer'>
              <img className='h-9 w-9 rounded-full' src="\images\IMG_0894.jpeg" alt="profile" />
              <h2 className='hidden xl:inline-flex text-base' style={{fontFamily: 'cursive'}}>Alozie Miracle Patrick</h2>
            </div>
            <div className='relative h-10 w-10 flex justify-center items-center mx-3 cursor-pointer'>
            <p className='absolute top-0 right-0 bg-black text-white rounded-full h-5 w-5 flex justify-center items-center shadow-sm'>0</p>
            <ShoppingCartIcon className='h-5 shadow-sm' />
            </div>
          </>
        ) : (
          <div className='mr-4'>
            <button className='bg-red-400 shadow-md text-white mx-2 p-2 rounded-md hover:bg-white hover:text-red-500 w-24'>Register</button>
          <button className='border shadow-md p-2 bg-black text-white rounded-md hover:bg-white hover:text-black w-24'>Login</button>
          </div>
        )}
        
      </div>

      

    </div>
  )
}

export default NavbarTop
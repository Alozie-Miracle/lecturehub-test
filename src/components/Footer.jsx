import React from 'react'

const Footer = () => {
  return (
    <div className='mt-10 bg-gray-100 h-[45vh]'>
      <div className="flex justify-between lg:mx-24 px-5 pt-5">
        <ul>
          <h3 className='text-base sm:text-2xl font-semibold'>Important Links</h3>
          <li className='text-xs sm:text-xl my-4'>About</li>
          <li className='text-xs sm:text-xl my-4'>Contact</li>
          <li className='text-xs sm:text-xl my-4'>Testimonies</li>
          <li className='text-xs sm:text-xl my-4'>Available Instructors</li>
          <li className='text-xs sm:text-xl my-4'>Board Members</li>
          <li className='text-xs sm:text-xl my-4'>Features</li>
        </ul>
        <ul>
          <h3 className='text-base sm:text-2xl font-semibold'>Socials</h3>
          <li className='text-xs sm:text-xl my-4'>facebook</li>
          <li className='text-xs sm:text-xl my-4'>linkedln</li>
          <li className='text-xs sm:text-xl my-4'>instagram</li>
          <li className='text-xs sm:text-xl my-4'>twitter</li>
        </ul>
        <ul>
          <h3 className='text-base sm:text-2xl font-semibold'>Account</h3>
          <li className='text-xs sm:text-xl my-4'>Login</li>
          <li className='text-xs sm:text-xl my-4'>Register</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer

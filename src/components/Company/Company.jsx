import React from 'react'

const Company = () => {
  return (
    <div className='p-2 lg:mx-24'>
      <h3 className='text-xl sm:text-5xl mt-10' style={{fontFamily: 'cursive'}}>Our Partners</h3>
      <div className='border-b border-solid border-b-gray-200 w-[200px] my-2 mb-10' />
      <div className='flex justify-between overflow-y-scroll gap-10 cursor-pointer hide-scrollbar'>
        <img src="\images\tnw.png" className='w-[200px] h-[50px]' alt="company" />
        <img src="\images\TechCrunch.png" className='w-[200px] h-[50px]' alt="company" />
        <img src="\images\mashable.png" className='w-[200px] h-[50px]' alt="company" />
        <img src="\images\bizinsider.png" className='w-[200px] h-[50px]' alt="company" />
      </div>
    </div>
  )
}

export default Company

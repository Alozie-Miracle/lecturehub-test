import { AcademicCapIcon, BriefcaseIcon, ChartBarIcon,  ChevronRightIcon, ComputerDesktopIcon, CurrencyDollarIcon, DevicePhoneMobileIcon, PencilIcon, SquaresPlusIcon, UserCircleIcon, WindowIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Category = () => {
  return (
    <div>
        <ul>
            <h3 className='my-2 text-base bg-white flex justify-center shadow-sm' style={{fontFamily:"cursive"}}>Course Categories</h3>
            <li className = 'text-sm my-2 bg-white w-full hover:shadow-md shodow-sm p-2  flex justify-between items-center'><span className='flex gap-2 items-center'><AcademicCapIcon className='h-4' /> University Courses</span> <ChevronRightIcon className='h-5'/></li>
            <li className = 'text-sm my-2 bg-white w-full hover:shadow-md shodow-sm p-2 flex justify-between items-center'><span className='flex gap-2 items-center'><WindowIcon className='h-4' /> Web Development </span><ChevronRightIcon className='h-5'/></li>
            <li className = 'text-sm my-2 bg-white w-full hover:shadow-md shodow-sm p-2 items-center flex justify-between'><span className='flex gap-2 items-center'><DevicePhoneMobileIcon className='h-4' /> Mobile Development</span> <ChevronRightIcon className='h-5'/></li>
            <li className = 'text-sm my-2 bg-white w-full hover:shadow-md shodow-sm p-2  flex justify-between items-center'><span className='flex gap-2 items-center'><SquaresPlusIcon className='h-4' /> Game Development </span><ChevronRightIcon className='h-5'/>
            </li><li className = 'text-sm my-2 bg-white w-full hover:shadow-md shodow-sm p-2  flex justify-between items-center'><span className='flex gap-2 items-center'><BriefcaseIcon className='h-4' /> Entrepreneurship</span> <ChevronRightIcon className='h-5'/></li>
            <li className = 'text-sm my-2 bg-white w-full hover:shadow-md shodow-sm p-2  flex justify-between items-center'>
              <span className='flex items-center gap-2'>
                <ChartBarIcon className='h-4'/> Business Analytics & Intelligence 
              </span>
              <ChevronRightIcon className='h-5'/></li>
            <li className = 'text-sm my-2 bg-white w-full hover:shadow-md shodow-sm p-2  flex justify-between items-center'>
              <span className='flex items-center gap-2'>
               <CurrencyDollarIcon className='h-4' /> Digital Marketing 
              </span>
              <ChevronRightIcon className='h-5'/></li>
            <li className = 'text-sm my-2 bg-white w-full hover:shadow-md shodow-sm p-2 flex justify-between items-center'>
              <span className='flex items-center gap-2'>
                <PencilIcon className='h-4' /> Graphical Design and Illustration
              </span>
               <ChevronRightIcon className='h-5'/></li>
            <li className = 'text-sm my-2 bg-white w-full hover:shadow-md shodow-sm p-2  flex justify-between items-center'>
              <span className='flex items-center gap-2'>
                <ComputerDesktopIcon className='h-4' />    IT Certificate
              </span> <ChevronRightIcon className='h-5'/></li>

            <li className = 'text-sm my-2 bg-white w-full hover:shadow-md shodow-sm p-2  flex justify-between items-center'>
              <span className='flex items-center gap-2'>
                <UserCircleIcon  className='h-4'/> Personal Information
              </span>
               <ChevronRightIcon className='h-5'/>
            </li>
        </ul>
    </div>
  )
}

export default Category

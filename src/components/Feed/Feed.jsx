import React from 'react'
import FeedSmall from './FeedSmall/FeedSmall'
import RecommendedFeed from '../RecommendedFeed'

const Feed = () => {
  return (
    <div className='xl:px-28 md:px-12 mb-12'>
      <h2 className='text-xl sm:text-4xl mt-12 py-5 px-2'>Recommended Courses</h2>
      <RecommendedFeed />
      <h2 className='text-xl sm:text-4xl mt-10 py-5 px-5'>All Courses</h2>
      
      <FeedSmall />
      
    </div>
  )
}

export default Feed

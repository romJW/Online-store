import React from 'react'

const HashTag = ({name}) => {
  return (
    <div className='flex justify-center items-center align-middle'>
    <div className='h-10 lg:h-14 bg-[#E4E4E4B2] text-[#9B9B9B] align-middle text-sm lg:text-lg rounded-[80px] px-3 py-2 lg:px-5 lg:py-4'>{name}</div>
    </div>
  )
}

export default HashTag
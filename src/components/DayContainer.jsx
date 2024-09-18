import React from 'react'
import DayTitle from './DayTitle'
export default function DayContainer({children , day}) {
  return (
    <div className='bg-[#f6faf3] w-[100%] md:w-[20%] h-[70vh] md:h-[100vh] border flex flex-col space-y-6'>
      <DayTitle>{day}</DayTitle>
      {children}
    </div>
  )
}

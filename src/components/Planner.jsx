import React from 'react'
import DayTitle from './DayTitle'

export default function Planner({tasks , setTasks}) {
  return (
    
    <>

    <div className='h-[100%] w-[100%] flex md:flex-row flex-col'>
    <div className="day monday bg-[#f6faf3] w-[100%] md:w-[20%] h-[100vh]">
        <DayTitle>Monday</DayTitle>
        {tasks.monday.tasks.map((task , index) => (
            <h2 key={index}>{task}</h2>
        ))}

    </div>
    <div className="day tuesday bg-[#f6faf3] w-[100%] md:w-[20%] h-[100vh]">
    <DayTitle>Tuesday</DayTitle>
    {tasks.tuesday.tasks.map((task , index) => (
            <h2 key={index}>{task}</h2>
        ))}
        </div>
        <div className="day wendesday bg-[#f6faf3] w-[100%] md:w-[20%] h-[100vh]">
        <DayTitle>Wednesday</DayTitle>
        {tasks.wednesday.tasks.map((task , index) => (
            <h2 key={index}>{task}</h2>
        ))}
        </div>
        <div className="day thursday bg-[#f6faf3] w-[100%] md:w-[20%] h-[100vh]">
        <DayTitle>Thursday</DayTitle>
        {tasks.thursday.tasks.map((task , index) => (
            <h2 key={index}>{task}</h2>
        ))}
        </div>
        <div className="day friday bg-[#f6faf3] w-[100%] md:w-[20%] h-[100vh]">
        <DayTitle>Friday</DayTitle>
        {tasks.friday.tasks.map((task , index) => (
            <h2 key={index}>{task}</h2>
        ))}
        </div>
        </div>
    </>
  )
}

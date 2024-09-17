import React from 'react'

export default function Planner({tasks , setTasks}) {
  return (
    
    <>

    <div className='h-[100%] w-[100%] flex md:flex-row flex-col'>
    <div className="day monday bg-slate-200 w-[100%] md:w-[20%] h-[100vh]">
        {tasks.monday.tasks.map((task , index) => (
            <h2 key={index}>{task}</h2>
        ))}

    </div>
    <div className="day tuesday bg-slate-600 w-[100%] md:w-[20%] h-[100vh]">
    {tasks.tuesday.tasks.map((task , index) => (
            <h2 key={index}>{task}</h2>
        ))}
        </div>
        <div className="day wendesday bg-slate-700 w-[100%] md:w-[20%] h-[100vh]">
        {tasks.wendesday.tasks.map((task , index) => (
            <h2 key={index}>{task}</h2>
        ))}
        </div>
        <div className="day thursday bg-slate-800 w-[100%] md:w-[20%] h-[100vh]">
        {tasks.thursday.tasks.map((task , index) => (
            <h2 key={index}>{task}</h2>
        ))}
        </div>
        <div className="day friday bg-blue-900 w-[100%] md:w-[20%] h-[100vh]">
        {tasks.friday.tasks.map((task , index) => (
            <h2 key={index}>{task}</h2>
        ))}
        </div>
        </div>
    </>
  )
}

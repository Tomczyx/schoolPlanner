import { useState } from 'react'
import Planner from './components/Planner'
import './App.css'
import Menu from './components/Menu'
import { data } from './data'


function App() {
  const [subject , setSubject] = useState(null)
  const [day , setDay] = useState(null)
  const [task , setTask] = useState(null)
  const [tasks , setTasks] = useState(data)
  const [taskTab , setTaskTab] = useState({
    monday: [],
    tuesday: [],
    wendesday: [],
    thursday: [],
    friday: [],
  })


  return (

      <div>
        <Menu subject={subject} setSubject={setSubject} day={day} setDay={setDay} tasks={tasks} setTasks={setTasks} task={task} setTask={setTask} setTaskTab={setTaskTab} taskTab={taskTab}/>
        <h5>{subject}</h5>
        <h5>{day}</h5>
        <Planner tasks={tasks} setTasks={setTasks}/>
      </div>
  )
}

export default App

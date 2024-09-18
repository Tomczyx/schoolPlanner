import { useEffect, useState } from 'react'
import Planner from './components/Planner'
import './App.css'
import Menu from './components/Menu'
import { data } from './data'
import Footer from './components/Footer'


function App() {
  const [subject , setSubject] = useState(null)
  const [day , setDay] = useState(null)
  const [task , setTask] = useState(null)
  const [tasks , setTasks] = useState(data)

  // useEffect(() => {
  //   const result = localStorage.getItem("dark")
  //   setDark(result)
  // }, [dark])

  const [taskTab , setTaskTab] = useState({
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
  })


  return (

      <div>
        <Menu subject={subject} setSubject={setSubject} day={day} setDay={setDay} tasks={tasks} setTasks={setTasks} task={task} setTask={setTask} setTaskTab={setTaskTab} taskTab={taskTab}/>
        <Planner tasks={tasks} setTasks={setTasks}/>
        <Footer />
      </div>
  )
}

export default App

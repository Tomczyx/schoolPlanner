import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Menu({
  subject,
  setSubject,
  setDay,
  day,
  task,
  setTask,
  tasks,
  setTasks,
  taskTab,
  setTaskTab,
}) {
  useEffect(() => {
    console.log(taskTab);
  }, [taskTab]);

  const handleAddTask = (selectedDay, task) => {

    if(task != null && taskTab[selectedDay].length < 4) {


      setTaskTab((prev) => {
        const updatedTaskTab = { ...prev };
        updatedTaskTab[selectedDay] = [...updatedTaskTab[selectedDay] , task]
          setTasks((prevTasks) => {
            const updatedTasks = { ...prevTasks };
            updatedTasks[selectedDay].tasks = updatedTaskTab[selectedDay];

            return updatedTasks;
          });
          
          return updatedTaskTab;
          
        });
        toast.success('Task added successfully!', {
          position: "top-right",
          autoClose: 2501,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
    } else {

                  toast.error('Task cannot be empty!', {
              position: "top-right",
              autoClose: 2501,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
    }
 
  };

  return (
    <header className="flex justify-center items-center h-20 bg-yellow-500">
              <ToastContainer
position="top-right"
autoClose={2501}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      <div>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setTask(e.target.value)}
        />
        <select
          onChange={(e) => setSubject(e.target.value)}
          defaultValue={"Wybierz przedmiot!"}
        >
          <option disabled>Wybierz przedmiot!</option>
          <option>Opcja 1</option>
          <option>Opcja 2</option>
          <option>Opcja 3</option>
        </select>
        <select
          onChange={(e) => setDay(e.target.value)}
          defaultValue={"Wybierz dzień!"}
        >
          <option disabled>Wybierz dzień!</option>
          <option>monday</option>
          <option>tuesday</option>
          <option>wednesday</option>
          <option>thursday</option>
          <option>friday</option>
        </select>
        <button onClick={() => handleAddTask(day, task)}>Dodaj</button>
      </div>
    </header>
  );
}

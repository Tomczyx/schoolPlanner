import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DarkMode from "./darkMode";
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
  setDark,
  dark
}) {
  useEffect(() => {

  }, [taskTab]);

  const handleAddTask = (selectedDay, task , subject) => {
const f = taskTab[selectedDay];

    if (task != null) {
      setTaskTab((prev) => {
        const updatedTaskTab = { ...prev };
        console.log(updatedTaskTab)
        updatedTaskTab[selectedDay] = [...updatedTaskTab[selectedDay].tasks, { task: task, subject: subject }];
        setTasks((prevTasks) => {
          const updatedTasks = { ...prevTasks };
          updatedTasks[selectedDay].tasks = updatedTaskTab[selectedDay];
          updatedTasks[selectedDay].subject = subject;
          console.log(updatedTasks)

          return updatedTasks;
        });

        return updatedTaskTab;
        
      });
      toast.success("Task added successfully!", {
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
      toast.error("Task cannot be empty!", {
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
    <header className="flex justify-center items-center h-20 bg-yellow-500 dark:bg-slate-600 ">
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
          className="m-10"
          type="text"
          name=""
          id=""
          onChange={(e) => setTask(e.target.value)}
        />
        <select
          className="m-10"
          onChange={(e) => setSubject(e.target.value)}
          defaultValue={"Wybierz przedmiot!"}
        >
          <option disabled>Wybierz przedmiot!</option>
          <option value="math">Math</option>
          <option value="physics">Physics</option>
          <option value="chemistry">Chemistry</option>
        </select>
        <select
          onChange={(e) => setDay(e.target.value)}
          defaultValue={"Wybierz dzień!"}
          className="m-10"
        >
          <option disabled>Wybierz dzień!</option>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
        </select>
        <button onClick={() => handleAddTask(day, task , subject)} className="m-10">
          Add
        </button>
        <DarkMode dark={dark} setDark={setDark}/>

      </div>
    </header>
  );
}

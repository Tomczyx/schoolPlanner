import React, { useEffect, useState } from "react";

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
    setTaskTab((prev) => {
    const updatedTaskTab = { ...prev };
    updatedTaskTab[selectedDay] = [...updatedTaskTab[selectedDay] , task]
      setTasks((prevTasks) => {
        const updatedTasks = { ...prevTasks };
        updatedTasks[selectedDay].tasks = updatedTaskTab[selectedDay];
        console.log(updatedTasks);
        return updatedTasks;
      });
      return updatedTaskTab;
    });
  };

  return (
    <header className="flex justify-center items-center h-20 bg-yellow-500">
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
          <option>wendesday</option>
          <option>thursday</option>
          <option>friday</option>
        </select>
        <button onClick={() => handleAddTask(day, task)}>Dodaj</button>
      </div>
    </header>
  );
}

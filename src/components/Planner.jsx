import React from "react";
import DayTitle from "./DayTitle";
import DayContainer from "./DayContainer";

export default function Planner({ tasks, setTasks }) {


    const result = Object.fromEntries(
        tasks.monday.tasks.map((item) => [{...item}])
    );
    console.log(result)
  return (
    <>
      <div className="h-[100%] w-[100%] flex md:flex-row flex-col ">
        <DayContainer day={"Monday"}>

            {/* {console.log(tasks.monday.tasks)}
          {tasks.monday.tasks.map((task, index) => (
          <h2>{task}</h2>
          ))} */}
        </DayContainer>

        <DayContainer day={"Tuesday"}>
          {tasks.tuesday.tasks.map((task, index) => (
            <div className="rounded-lg p-3  relative overflow-hidden bg-[#c0f2c7] m-4">
              <div className="absolute w-1.5 top-0 bottom-0 left-0 bg-[#1a4d23]"></div>
              <h2 key={index}>{task}</h2>
            </div>
          ))}
        </DayContainer>

        <DayContainer day={"Wednesday"}>
          {tasks.wednesday.tasks.map((task, index) => (
            <div className="rounded-lg p-3 pb-4 pl-5 relative overflow-hidden bg-[#c0f2c7] m-4">
              <div className="absolute w-1.5 top-0 bottom-0 left-0 bg-[#1a4d23]"></div>
              <h2 key={index}>{task}</h2>
            </div>
          ))}
        </DayContainer>

        <DayContainer day={"Thursday"}>
          {tasks.thursday.tasks.map((task, index) => (
            <div className="rounded-lg p-3 pb-4 pl-5 relative overflow-hidden bg-[#c0f2c7] m-4">
              <div className="absolute w-1.5 top-0 bottom-0 left-0 bg-[#1a4d23]"></div>
              <h2 key={index}>{task}</h2>
            </div>
          ))}
        </DayContainer>

        <DayContainer day={"Friday"}>
          {tasks.friday.tasks.map((task, index) => (
            <div className="rounded-lg p-3 pb-4 pl-5 relative overflow-hidden bg-[#c0f2c7] m-4">
              {" "}
              <div className="absolute w-1.5 top-0 bottom-0 left-0 bg-[#1a4d23]"></div>
              <h2 key={index}>{task}</h2>
            </div>
          ))}
        </DayContainer>
      </div>
    </>
  );
}

"use client";

import { useState } from "react";
import { add_task } from "../server_functions/add_task";


const TaskType = ({ task }) => {
  const [dropped, setDropped] = useState(false);

  const handleAddTask = async () => {
    const location = localStorage.getItem("location")
    const name = localStorage.getItem("name")
    const date = new Date(Date.now()).toISOString();
    const data = {type: task.type, location: location, date: date, name: name }
    // await add_task(data);
  };

  return (
    <div
      className="senior-body"
      onClick={() => {
        setDropped(!dropped);
      }}
    >
      <div className="senior-text">{task.type}</div>
      {dropped && (
        <div className="flex flex-col">
          <a href={`tel:${task.number}`}>Skambinti pagalbai: {task.number}</a>
          <button
            onClick={() => {
              handleAddTask();
            }}
          >
            Kviesti žmogų
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskType;

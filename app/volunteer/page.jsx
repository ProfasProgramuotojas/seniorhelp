"use client";

import { get_tasks } from "../server_functions/get_tasks";
import { useEffect, useState } from "react";
import Task from "../components/Task";

const page = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetch_tasks = async () => {
      const res = await get_tasks();
      setTasks(res);
    };
    fetch_tasks();
  }, []);

  return (
    <div>
      <div className="volunteer-text">Pasirinkite užduotį:</div>
      {tasks.map((task, key) => {
        return (
          <div key={key} className="volunteer-container">
            <Task data={task} />
          </div>
        );
      })}
    </div>
  );
};

export default page;

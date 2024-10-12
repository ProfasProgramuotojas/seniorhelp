"use client";

import { useEffect, useState } from "react";

const Task = ({ data }) => {
  const [multiplier, setMultiplier] = useState(0);
  const [date, setDate] = useState("");

  useEffect(() => {
    const nowDate = new Date();
    const givenDate = new Date(data.date);
    const hours = Math.floor((nowDate - givenDate) / (1000 * 60 * 60));
    const formattedDate = givenDate.toISOString().substring(0, 10);
    setDate(formattedDate);

    setMultiplier((1 + hours * 0.01).toFixed(2));
    console.log(formattedDate);
  }, [data]);

  return (
    <div className="task-container">
      <div className="task-topbar">
        <div>{data.name}</div>
        <div>{data.location}</div>
        </div>
      <div className="task-middlebar">
        <div>Pagalba su {data.type}</div>
      </div>
      <div className="task-bottombar">
        <div>{date}</div>
        <div>valandos x {multiplier}</div>
      </div>
    </div>
  );
};

export default Task;

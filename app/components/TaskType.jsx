"use client";

import { useState } from "react";
import { add_task } from "../server_functions/add_task";

const TaskType = ({ task }) => {

  return (
    <div
      className="senior-body"
      onClick={() => {
        window.location.href = `senior/${task.type}`;
      }}
    >
      <div className="senior-text">{task.type}</div>
    </div>
  );
};

export default TaskType;

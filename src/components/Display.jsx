import React from "react";
import TaskItem from "./TaskItem";
const Display = ({ tasks }) => {
  return (
    <ul>
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <TaskItem key={task.id} task={task}></TaskItem>
        ))}
    </ul>
  );
};

export default Display;

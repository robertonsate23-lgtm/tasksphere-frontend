import React from "react";

const TaskCard = ({ task }) => {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>
        <strong>Priority:</strong> {task.priority}
      </p>

      <p>
        <strong>Status:</strong> {task.status}
      </p>

      <p>
        <strong>Due:</strong> {task.dueDate}
      </p>
    </div>
  );
};

export default TaskCard;
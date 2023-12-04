import React from "react";
import Task from "./Task";
import "../styles/task-list.css";

const TaskList = ({
  list,
  deleteTask,
  markTaskAsDone,
  editTask,
  setTaskBeingEdited,
}) => {
  return (
    <ul className="task-list">
      <div className="items-container">
        {list.map((task) => (
          <Task
            id={task.id}
            title={task.title}
            isDone={task.isDone}
            deleteTask={deleteTask}
            markTaskAsDone={markTaskAsDone}
            setTaskBeingEdited={setTaskBeingEdited}
            key={task.id}
          />
        ))}
      </div>
    </ul>
  );
};

export default TaskList;

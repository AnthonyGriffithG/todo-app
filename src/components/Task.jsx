import React, { useState } from "react";
import "../styles/task.css";
import { FaTrashAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";

const Task = ({
  id,
  title,
  isDone,
  deleteTask,
  markTaskAsDone,
  setTaskBeingEdited,
}) => {
  const deleteTaskHandler = () => deleteTask(id);

  const markTaskAsDoneHandler = () => markTaskAsDone(id);

  return (
    <li className={`task-list__item ${isDone ? "task-list__item--done" : ""}`}>
      <p className="task-list__item-title">{title}</p>
      <span className="task-list__item-icons">
        {isDone || (
          <FaCheckCircle
            className="task-icon"
            size={18}
            onClick={markTaskAsDoneHandler}
          />
        )}
        <MdEditSquare
          className="task-icon"
          size={18}
          onClick={() => setTaskBeingEdited({ id, title })}
        />
        <FaTrashAlt
          className="task-icon"
          size={18}
          onClick={deleteTaskHandler}
        />
      </span>
    </li>
  );
};

export default Task;

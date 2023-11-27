import React from 'react';
import '../styles/task.css';
import { FaTrashAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const Task = ({ id, title, isDone, deleteTask, markTaskAsDone }) => {
  const deleteTaskHandler = () => {
    deleteTask(id);
  }

  const markTaskAsDoneHandler = () => {
    markTaskAsDone(id);
  }

  return (
    <li className={`task-list__item ${isDone? 'task-list__item--done': ''}`}>
        <p className='task-list__item-title'>{title}</p> 
        <span className='task-list__item-icons'>
            <FaTrashAlt className='task-icon' size={18} onClick={deleteTaskHandler} />
            <FaCheckCircle className='task-icon' size={18} onClick={markTaskAsDoneHandler} />
        </span>
    </li>
  )
}

export default Task
import React from 'react';
import '../styles/task.css';
import { FaTrashAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const Task = ({ title, id, deleteTask }) => {
  const deleteTaskHandler = () => {
    deleteTask(id);
  }

  return (
    <li className='task-list__item'>
        <p className='task-list__item-title'>{title}</p> 
        <span className='task-list__item-icons'>
            <FaTrashAlt className='task-icon' size={18} onClick={deleteTaskHandler} />
            <FaCheckCircle className='task-icon' size={18} />
        </span>
    </li>
  )
}

export default Task
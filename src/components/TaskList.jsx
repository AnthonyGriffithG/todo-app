import React from 'react';
import Task from './Task';
import '../styles/task-list.css';

const TaskList = ({ list, deleteTask }) => { 
  return (
    <ul className='task-list'>
        { list.map((task) => <Task title = {task.title} id={task.id} deleteTask={deleteTask} key={task.id} />) }
    </ul>
  )
}

export default TaskList
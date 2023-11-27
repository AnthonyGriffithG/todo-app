import React from 'react';
import Task from './Task';
import '../styles/task-list.css';

const TaskList = ({ list }) => {
  return (
    <ul className='task-list'>
        { list.map((task) => <Task title = {task.title} key={task.id} />) }
    </ul>
  )
}

export default TaskList
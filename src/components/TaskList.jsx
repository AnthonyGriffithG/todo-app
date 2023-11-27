import React from 'react';
import Task from './Task';
import '../styles/task-list.css';

const TaskList = ({ list, deleteTask, markTaskAsDone }) => { 
  return (
    <ul className='task-list'>
        { list.map((task) => <Task id={task.id} title = {task.title} isDone={task.isDone} deleteTask={deleteTask} markTaskAsDone={markTaskAsDone} key={task.id} />) }
    </ul>
  )
}

export default TaskList
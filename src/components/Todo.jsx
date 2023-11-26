import React from 'react';
import '../styles/todo.css';
import TaskForm from './TaskForm'
import { useState } from 'react';


const todo = () => {
  const [list, setList] = useState([]);

  const addTask = (title) => { 
    setList([...list, title]);
  }

  return (
    <div className='todo'>
      <h1 className='title'>Tasks Manager</h1>
      <TaskForm onAddTask={addTask} />
    </div>
  )
}

export default todo

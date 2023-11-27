import React from 'react';
import '../styles/todo.css';
import TaskForm from './TaskForm'
import { useState, useEffect } from 'react';
import TaskList from './TaskList';


const todo = () => {
  const [list, setList] = useState([{title: 'example task 1', id: 1}, {title: 'example task 2', id: 2}, {title: 'example task 3', id: 3}]);

  const addTask = (title, id) => { 
    setList([...list, { title, id }]);
  }

  useEffect(() => {
    console.log(list);
  }, [list])
  

  return (
    <div className='todo'>
      <h1 className='title'>Tasks Manager</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList list={list} />
    </div>
  )
}

export default todo

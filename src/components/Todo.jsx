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

  const deleteTask = id => {
    setList(list.filter(task => task.id !== id));
  }

  const markTaskAsDone = (id) => {
    setList(list.map(task => task.id === id? { ...task, isDone: true } : task));
  }

  const editTask = (id, newTitle) => {
    setList(list.map(task => {
      return list.id === id? { ...task, title: newTitle } : task;
    }))
  }

  useEffect(() => {
    console.log(list);
  }, [list])
  

  return (
    <div className='todo'>
      <h1 className='title'>Tasks Manager</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList list={list} deleteTask={deleteTask} markTaskAsDone={markTaskAsDone} />
    </div>
  )
}

export default todo

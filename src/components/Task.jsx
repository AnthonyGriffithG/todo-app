import React from 'react'
import '../styles/task.css'

const Task = ({ title }) => {
  return (
    <li className='task-list__item'>{title}</li>
  )
}

export default Task
import React from "react";
import "../styles/todo.css";
import TaskForm from "./TaskForm";
import { useState, useEffect } from "react";
import TaskList from "./TaskList";

const todo = () => {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [
      { title: "example task 1", id: 1 },
      { title: "example task 2", id: 2 },
      { title: "example task 3", id: 3 },
    ]
  );

  const addTask = (title, id) => {
    setList([{ title, id }, ...list]);
  };

  const deleteTask = (id) => {
    setList(list.filter((task) => task.id !== id));
  };

  const markTaskAsDone = (id) => {
    setList(
      list.map((task) => (task.id === id ? { ...task, isDone: true } : task))
    );
  };

  const editTask = (id, newTitle) => {
    setList(
      list.map((task) => {
        return list.id === id ? { ...task, title: newTitle } : task;
      })
    );
  };

  useEffect(() => {
    list.length && localStorage.setItem("tasks", JSON.stringify(list));
  }, [list]);

  return (
    <div className="todo">
      <h1 className="title">
        <span className="title__first-word">Tasks</span> Manager
      </h1>
      <TaskForm onAddTask={addTask} />
      <TaskList
        list={list}
        deleteTask={deleteTask}
        markTaskAsDone={markTaskAsDone}
      />
      <footer></footer>
    </div>
  );
};

export default todo;

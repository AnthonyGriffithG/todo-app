import React, { useState } from "react";
import "../styles/task-form.css";

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [id, setId] = useState(4);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddTask(title.trim(), id);
    setId(id + 1);
    setTitle("");
  };

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-form__input"
        type="text"
        placeholder="Type a task"
        maxLength={30}
        onChange={handleInputChange}
        value={title}
      />
      <button type="submit" className="task-form__button">
        Add
      </button>
    </form>
  );
};

export default TaskForm;

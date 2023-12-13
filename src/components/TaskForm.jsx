import React, { useEffect, useRef, useState } from "react";
import "../styles/task-form.css";

const TaskForm = ({
  onAddTask,
  onEditTask,
  taskBeingEdited,
  setTaskBeingEdited,
}) => {
  const [title, setTitle] = useState("");
  const [id, setId] = useState(Number(localStorage.getItem("id")) || 4);
  const inputRef = useRef();
  const editBtnRef = useRef();
  const [hideCancelEditBtn, setHideCancelEditBtn] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return setTaskBeingEdited(null);

    if (!taskBeingEdited) {
      onAddTask(title.trim(), id);
      setId(id + 1);
    } else {
      if (!e.nativeEvent.submitter.classList.contains("cancel-edit-btn")) {
        onEditTask(taskBeingEdited.id, title);
      }
      setTaskBeingEdited(null);
    }
    setTitle("");
  };

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("id", id);
  }, [id]);

  useEffect(() => {
    if (taskBeingEdited) {
      setTitle(taskBeingEdited.title);
      inputRef.current.focus();
      setHideCancelEditBtn(false);
    } else {
      const button = editBtnRef.current;
      if (!button) return;
      console.log(button);
      button.classList.add("disappear");
      setTimeout(() => {
        button.classList.remove("disappear");
        setHideCancelEditBtn(true);
      }, 500);
    }
  }, [taskBeingEdited]);

  return (
    <form
      className={`task-form ${taskBeingEdited ? "edit" : ""}`}
      onSubmit={handleSubmit}
    >
      <div className="input-wrapper">
        <input
          className="task-form__input"
          type="text"
          placeholder="Type a task"
          maxLength={30}
          onChange={handleInputChange}
          value={title}
          ref={inputRef}
        />
        <button type="submit" className="task-form__button">
          {!taskBeingEdited ? "Add" : "Edit"}
        </button>
      </div>
      {!hideCancelEditBtn && (
        <button className="cancel-edit-btn" ref={editBtnRef}>
          Cancel edit
        </button>
      )}
    </form>
  );
};

export default TaskForm;

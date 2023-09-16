import React, { useState } from "react";
import "./NewTask.css";

function NewTask(props) {
  const [enteredName, setEnteredName] = useState("");

  const nameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const [enteredLevel, setEnteredLevel] = useState("1");

  const levelHandler = (event) => {
    setEnteredLevel(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const task = {
      name: enteredName,
      level: enteredLevel,
      date: "",
      time: "",
      key: Math.random().toString(),
      hide: "false"
    };
    props.addTask(task);
    //props.onSavetask(task);
    setEnteredName("");
    setEnteredLevel("1");
  };

  return (
    <form onSubmit={submitHandler} className="new-task">
      <div>
        <div>
          <label>Task</label>
          <input
            type="text"
            minLength={2}
            value={enteredName}
            onChange={nameHandler}
          />
        </div>
        <div>
          <label>Level</label>
          <input
            type="number"
            min="1"
            max="3"
            value={enteredLevel}
            onChange={levelHandler}
          />
        </div>
      </div>
      <div className="new-task__add">
        <button type="submit">Add task</button>
      </div>
    </form>
  );
}
export default NewTask;

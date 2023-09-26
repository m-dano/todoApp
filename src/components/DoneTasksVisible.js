import React, { useState } from "react";
import "./DoneTasksVisible.css";
function DoneTasksVisible(props) {
  const [visible, SetVisible] = useState(false);
  const [text, SetText] = useState("Visible All");

  function VisibleAll() {
    SetVisible(!visible);
    if (visible === false) {
      SetText("Need ToDo");
    } else {
      SetText("Visible All");
    }
    props.All();
  }
  return (
    <div>
      <button className="done-tasks-visible" onClick={VisibleAll}>
        {text}
      </button>
    </div>
  );
}
export default DoneTasksVisible;

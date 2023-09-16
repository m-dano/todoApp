import React, { useState } from "react";
import TaskItem from "./TaskItem";

function TaskItemFilter(props) {
  const [done, setDoneHandler] = useState(false);
  function UpdateHide() {
    setDoneHandler(!done);
  }

  if (props.visibleAll === false) {
    return (
      <TaskItem
        name={props.name}
        level={props.level}
        hide={done}
        update={UpdateHide}
        visibleAll={props.visibleAll}
      />
    );
  } else {
    return (
      <TaskItem
        name={props.name}
        level={props.level}
        hide={false}
        update={UpdateHide}
        visibleAll={props.visibleAll}
      />
    );
  }
}
export default TaskItemFilter;

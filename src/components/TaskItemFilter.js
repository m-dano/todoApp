import React, { useState } from "react";
import TaskItem from "./TaskItem";

function TaskItemFilter(props) {
  const [done, setDoneHandler] = useState(false);
  function UpdateHide() {
    setDoneHandler(!done);
  }

  return (
    <TaskItem
      name={props.name}
      level={props.level}
      hide={props.visibleAll ? false : done}
      update={UpdateHide}
      visibleAll={props.visibleAll}
    />
  );
}
export default TaskItemFilter;

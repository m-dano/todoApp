import "./TaskItem.css";

function TaskItem(props) {
  let cssStyle = "task-item task-item__blue";
  if (props.level === "1") {
    cssStyle = "task-item task-item__green";
  } else if (props.level === "2") {
    cssStyle = "task-item task-item__blue";
  } else {
    cssStyle = "task-item task-item__red";
  }

  switch (props.level) {
    case "1":
      cssStyle = "task-item task-item__green";
      break;
    case "2":
      cssStyle = "task-item task-item__blue";
      break;
    case "3":
      cssStyle = "task-item task-item__red";
      break;
    default:
      cssStyle = "task-item task-item__blue";
      break;
  }

  const doneHandler = () => {
    props.update();
  };

  if (props.hide === false) {
    if (props.visibleAll === false) {
      return (
        <li className={cssStyle}>
          <h2>{props.name}</h2>
          <button className="task-item__done" onClick={doneHandler}>
            Done
          </button>
        </li>
      );
    } else {
      return (
        <li className={cssStyle}>
          <h2>{props.name}</h2>
        </li>
      );
    }
  }
}
export default TaskItem;

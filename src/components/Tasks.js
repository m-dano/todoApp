import TaskItemFilter from "./TaskItemFilter";

function Tasks(props) {
  return (
    <ul>
      {props.tasks.map((task) => (
        <TaskItemFilter
          name={task.name}
          level={task.level}
          key={task.key}
          hide={task.hide}
          visibleAll={props.visibleAll}
        />
      ))}
    </ul>
  );
}
export default Tasks;

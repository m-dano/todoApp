import "./styles.css";
import Tasks from "./components/Tasks";

import NewTask from "./components/NewTask";

import DoneTasksVisible from "./components/DoneTasksVisible";
import { useState } from "react";

export default function App() {
  const myTasks = [
    {
      name: "Shopping",
      date: "4.8.2023",
      time: "16:00",
      level: "2", //  1->low, 2->medium, 3->high
      key: Math.random().toString(),
      hide: "false"
    },
    {
      name: "Dentist",
      date: "4.8.2023",
      time: "10:00",
      level: "3",
      key: Math.random().toString(),
      hide: "false"
    },
    {
      name: "Go to gym",
      date: "4.8.2023",
      time: "19:15",
      level: "1",
      key: Math.random().toString(),
      hide: "false"
    },
    {
      name: "Meet Eric",
      date: "3.8.2023",
      time: "17:30",
      level: "2",
      key: Math.random().toString(),
      hide: "false"
    }
  ];

  const [listOfTasks, setListOfTasks] = useState(myTasks);
  const AddTask = (addedTask) => {
    setListOfTasks([addedTask, ...listOfTasks]);
  };

  const [All, SetAll] = useState(false);
  function VisibleAll() {
    SetAll(!All);
  }

  return (
    <div className="app">
      <h1 className="app__title">My ToDo list</h1>

      <DoneTasksVisible All={VisibleAll} />
      <NewTask addTask={AddTask} />
      <Tasks tasks={listOfTasks} visibleAll={All} />
    </div>
  );
}

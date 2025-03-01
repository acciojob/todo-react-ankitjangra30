
import React,{useState} from "react";
import './../styles/App.css';

import TaskForm from "./TaskForm";
import ListTask from "./ListTask";

const App = () => {
  const [taskList, setTaskList] = useState([])
  const [updateTask, setUpdateTask] = useState("")
  console.log(updateTask)
  // console.log(taskList)
  return (
    <div>
        <TaskForm 
        taskList={taskList}
        setTaskList={setTaskList}
        updateTask={updateTask}
        setUpdateTask={setUpdateTask}
        
        />

        <ListTask 
          taskList={taskList}
          setTaskList={setTaskList}
          setUpdateTask={setUpdateTask}
        />
    </div>
  )
}

export default App

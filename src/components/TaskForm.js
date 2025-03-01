import React,{useState,useEffect} from "react";
import ListTask from "./ListTask";

import { v4 as uuid4 } from 'uuid';

const TaskForm = ({taskList, setTaskList, updateTask,setUpdateTask}) => {
    const [tasks, setTasks] = useState("")
   

   

     useEffect(()=>{
          if(updateTask){
            setTasks(taskList.find(value => value.id == updateTask).task)
          }
     },[updateTask])

     



     function handleSubmit(e){
        e.preventDefault()
        if(!updateTask){
        setTaskList([...taskList, {
            id: uuid4(),
            task: tasks
        }])
       }
      else if(updateTask){

         let newArr = []

         for(let t of taskList){
            if(t.id == updateTask){
                newArr.push({
                    id: updateTask,
                    task: tasks
                })
            }
            else{
                newArr.push(t)
            }
         }
         setTaskList(newArr)
         setUpdateTask("")




      }

      setTasks("")
     }

  return (
    <div>
        <h2>To-Do List</h2>
        <h2> {updateTask?"Update Task": "Add Task"} </h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" placeholder={updateTask?"Update Task": "Add Task"} 
           onChange={(e) => {
            setTasks(e.target.value)
          }}
           value={tasks}
           
         
        />
        <button type="submit"> {updateTask?"Update Task": "Add Task"}</button>
      </form>

     
    </div>
  );
};

export default TaskForm;

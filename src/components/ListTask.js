import React from "react";

const ListTask = ({taskList, setTaskList, setUpdateTask}) => {

    function deleteTask(deleteId){

   
       setTaskList(taskList.filter(value => value.id != deleteId))

    }
   

  return (
    <div>
      <ul>
        {taskList &&
          taskList.length > 0 &&
          taskList.map((value) => (
          <li key={value.id}> 
              {value.task} 
              <button onClick={()=>deleteTask(value.id)}>Delete</button>
              <button onClick={()=>setUpdateTask(value.id)}>Update</button>
          
          </li>
        
        )
          
          )}
      </ul>
    </div>
  );
};

export default ListTask;

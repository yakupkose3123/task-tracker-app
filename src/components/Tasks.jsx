import React from 'react'
import Button from './Button'
import Task from './Task'

const Tasks = ({tasks, deleteTask,handleDoubleClick,noTask ,allDeleteTasks}) =>{
  
  return (
    <div>
      {!tasks.length &&  <h3 style={{textAlign :"center"}}>{noTask}</h3> }
      {
        tasks.map((task,index)=>
        <Task key={task.id} task = {task} deleteTask = {deleteTask} handleDoubleClick={handleDoubleClick} index={index}/>                       
        )}
        {tasks.length ?
        <Button color = "red" text = "Delete All Task Lists" handleClick ={allDeleteTasks} /> 
        :""}
    </div>
  )
}

export default Tasks
import React from 'react'
import Task from './Task'

const Tasks = ({tasks, deleteTask}) => {
  return (
    <div>{
        tasks.map((task)=>
        <Task task = {task} deleteTask = {deleteTask}/>                       
        )}
    </div>
  )
}

export default Tasks
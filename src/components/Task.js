import {FaTimes} from "react-icons/fa";

const Task = ({task, deleteTask,handleDoubleClick,index}) => {
  return (
    <div className={`task ${task.isDone ? "done":""}`} onDoubleClick={()=>handleDoubleClick(task.id)}>

        <h3>
          {index+1} {`. `}  
          {task.text} 
          <FaTimes style={{color:"red", cursor:"pointer"}} onClick={()=> deleteTask(task.id)}/>
          </h3>
        <p>{task.day}</p>

    </div>
  )
}

export default Task
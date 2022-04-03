import React, { useState } from 'react'

const AddTask = ({addTask}) => {

  const [text, settext] = useState("");
  const [day, setday] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    addTask({text,day, isDone:false});
    settext("");
    setday("");
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
        <div className="form-control">
            <label htmlFor="task">Task</label>
            <input 
            type="text"
            name='text'
            id='task'
            placeholder='AddTask'
            required
            onChange={(e) => settext(e.target.value)}
            value = {text}
            />
        </div>
        <div className="form-control">
            <label htmlFor="day">Day & Time</label>
            <input 
            type="text"
            name='text'
            id='task'
            placeholder='Add Day & Tİme'
            onChange={(e) => setday(e.target.value)}
            required
            value = {day}
            />
        </div>

        <input type="submit" value="Save Task" className = "btn btn-block" />

    
    </form>
  )
}

export default AddTask
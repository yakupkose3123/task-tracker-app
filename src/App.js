
import './App.css';
import Header from './components/Header';
import {useState} from "react";
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

function App() {
  const [tasks, settasks] = useState([
    {
      id : 1,
      text : "Study React Pre-Class Notes",
      day : "Dec 12th at 2:30pm",
      isDone : false,
    },
    {
      id : 2,
      text : "Feed the Dog",
      day : "Oc 12th at 1:30pm",
      isDone : true,
    },
    {
      id : 3,
      text : "Attend In-Class",
      day : "Dec 12th at 2:30pm",
      isDone : false,
    },
  ]);

  // ADD TASK
const addTask = (newTask)=>{
  const id = Math.floor(Math.random() * 1000 + 1);
  const addNewTask = {id, ...newTask};
  settasks([...tasks, addNewTask]);
};


  // DELETE TASK
  const deleteTask = (id)=>{
    // console.log(id);
    settasks(tasks.filter((task) =>task.id !== id))
  }

  


  return (
    <div className="container">
      <Header title = "TASK TRACKER"/>
      <AddTask addTask = {addTask}/>
      <Tasks tasks = {tasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;

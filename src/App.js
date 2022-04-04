
import './App.css';
import Header from './components/Header';
import {useState , useEffect} from "react";
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import {v4 as uuidv4} from "uuid";

function App() {
  const [tasks, settasks] = useState([]);

  const baseUrl = "http://localhost:5000/tasks";

  //!CRUD Create Read Update Delete

  //? Fetch Tasks
  const fetchTask = async () =>{
    const res = await fetch(baseUrl);
    const data = await res.json();
    settasks(data);
  };

  
 useEffect(() => {  
  fetchTask();
 }, [])
 


  //? ADD TASK
const addTask = (newTask)=>{
  
  const addNewTask = {id:uuidv4(), ...newTask};
  settasks([...tasks, addNewTask]);
};




  //? DELETE TASK
  const deleteTask = (id)=>{
    // console.log(id);
    settasks(tasks.filter((task) =>task.id !== id))
  }
  const allDeleteTasks = ()=> settasks([])
  

  //TOGGLE DONE
  const handleDoubleClick = (toggleDoneId)=>{
    // alert("doubleClick");
    settasks(tasks.map((task)=> task.id === toggleDoneId ? {...task, isDone: !task.isDone}: task)); 

  }

  //SHOW ADD TASK
  const [buttonText, setbuttonText] = useState("Close Add Task Bar");
  const [showAdd, setshowAdd] = useState(true);

  const handleClickHeader = ()=>{
    setbuttonText(buttonText === "Close Add Task Bar" ? "Show Add Task Bar": "Close Add Task Bar");
    setshowAdd(!showAdd);    
} 
  



  return (
    <div className="container">
      <Header title = "TASK TRACKER" buttonText={buttonText} handleClickHeader = {handleClickHeader}/>
      { showAdd && <AddTask addTask = {addTask}  /> }
      <Tasks tasks = {tasks} deleteTask={deleteTask} handleDoubleClick={handleDoubleClick} noTask ="NO TASK TO SHOW" allDeleteTasks={allDeleteTasks}/>
    </div>
  );
}

export default App;

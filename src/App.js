
import './App.css';
import Header from './components/Header';
import {useState , useEffect} from "react";
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import {v4 as uuidv4} from "uuid";
import axios from 'axios';

function App() {
  const [tasks, settasks] = useState([]);

  const baseUrl = "http://localhost:5000/tasks";

  //!CRUD Create Read Update Delete

/*   //? Fetch Tasks
  const fetchTask = async () =>{
    try 
      {const res = await fetch(baseUrl);
    const data = await res.json();
    settasks(data);
    }  
     catch (error) {
       alert(error);     
      }

  } */

  //? Fetch Tasks with axios

  const fetchTask = async ()=>{
    const {data} = await axios.get(baseUrl);
    settasks(data);
  }



 useEffect(() => {  
  fetchTask();
 }, [])



  //? ADD TASK
  //! https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch 
  //* buradan post methodunu incele 
 /* const addTask = async(newTask)=>{
   const res = await fetch(baseUrl, {
     method: "POST",
     headers : {
       "Content-Type": "application/json"
     },
     body : JSON.stringify(newTask)
   })
   await res.json();
   fetchTask();
 } */

 //? ADD TASK WİTH AXİOS

 const addTask = async(newTask)=>{
   await axios.post(baseUrl, newTask);
   fetchTask();
 }


  //? DELETE TASK
  const deleteTask = async (id)=>{
    await axios.delete(baseUrl+"/"+id);
    fetchTask();
  }

  const allDeleteTasks = ()=>{
    tasks.map((task)=>
     axios.delete(baseUrl+"/"+task.id)
    );
    fetchTask();
  }
 
  

  //?TOGGLE DONE
  const handleDoubleClick = async(toggleDoneId)=>{
    const {data} = await axios.get(baseUrl +"/"+toggleDoneId);
    // const updateTask = {...data, isDone: !data.isDone};
    // await axios.put(baseUrl +"/"+toggleDoneId, updateTask);
    await axios.patch(baseUrl +"/"+toggleDoneId, {isDone:!data.isDone});
    //patch yama gibi sadece update ettiğin kısmı gönderiyorsun, put ta hepsini

    fetchTask();
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

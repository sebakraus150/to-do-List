<<<<<<< HEAD
import React, {useState} from 'react'
=======
import React, {useEffect, useState} from 'react'
>>>>>>> 73adcf8d70f2bbfe07cf084c9f1d4cf87924af48
import "./index.css"
import { IoMenuOutline, IoColorFillSharp } from "react-icons/io5";
import { Menu } from './components/Menu-component/menu';
import { TaskForm } from './components/TaskForm-component/taskForm';
import  TaskList  from './components/TaskList-component/taskList';
import logo from "./images/todolistLogo.svg"
<<<<<<< HEAD
=======

>>>>>>> 73adcf8d70f2bbfe07cf084c9f1d4cf87924af48
function App() {

  const [fondo,setBg] = useState(0)
  const changeBg = (newId) =>{
    setBg(newId)
  }
<<<<<<< HEAD
  /*
  empiezo a hacer cambios
  */
  const [tasks, setTasks] = useState([])
  const addTask = (task) =>{
    setTasks([...tasks, task])
  }
  console.log(tasks);
=======

  const tasksGuardadas = JSON.parse(localStorage.getItem("tasks")) || []
  const [tasks, setTasks] = useState(tasksGuardadas)

  const addTask = (task) =>{
    setTasks([...tasks, task])
  }

  const resetTask = () => {
    const response = confirm("¿Está seguro de eliminar todas las notas?")
    response ? setTasks([]) : {} /* es como el pass de python el {}*/
  }

  useEffect(() =>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks])

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id != taskId))}

>>>>>>> 73adcf8d70f2bbfe07cf084c9f1d4cf87924af48
  return (
    <div id='content' >
      <div id="bgFix" style={{backgroundImage: 'url(src/components/Menu-component/imgs/background'+fondo+'.png)'}}></div>
      <Menu bg={changeBg}/>
<<<<<<< HEAD
      <header className='cabecera'>
        <img src={logo} alt='Logo de la pagina web, "to do LIST"' height="200vp"/>
        </header>
      <div className="notitas">
        <TaskForm addTask={addTask}/>
        <TaskList tasks={tasks}/>
=======
      <header className='cabecera' >
        <img src={logo} alt='Logo de la pagina web, "to do LIST"' height="200vp" onClick={resetTask}/>
        </header>
      <div className="notitas">
        <div className='alinearNota'> 
          <TaskForm addTask={addTask} />
        </div>
        <TaskList tasks={tasks} deleteTask={deleteTask}/>
>>>>>>> 73adcf8d70f2bbfe07cf084c9f1d4cf87924af48
      </div>  
    </div>
  )
}

export default App
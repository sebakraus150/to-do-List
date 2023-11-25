import React from "react";
import TaskItem from '../TaskItem-component/taskItem'
import './taskList.css'

<<<<<<< HEAD
const TaskList = ({tasks}) => {
    return (
        <div className="notitas notaNueva">
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    );
    
=======
const TaskList = ({tasks,deleteTask}) => {
    return (

        tasks.map(task => (
            <div className="alinearNota">
            <TaskItem key={task.id} task={task} deleteTask={deleteTask}/>
            </div>
        ))

    );
>>>>>>> 73adcf8d70f2bbfe07cf084c9f1d4cf87924af48
}
export default TaskList
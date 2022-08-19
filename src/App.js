import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask';
import {useState} from 'react';

function App() {
  
  const [tasks, setTasks] = useState([
    {
        id:1,
        text:'text1',
        day:'day1',
        reminder:true,
    },
    {
        id:2,
        text:'text2',
        day:'day2',
        reminder:true,
    },
    {
        id:3,
        text:'text3',
        day:'day3',
        reminder:false,
    },
])
  const addTask = (task) => {
    console.log(task)
  }
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id))
  }
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: 
      !task.reminder}: task
      ))
  }
  
  return (
    <div>
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : (
            'No Tasks To Show'    
      )}
      
    </div>
  )
}
export default App

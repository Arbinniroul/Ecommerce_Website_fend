import  { useReducer } from 'react'
import Todo from '../modules/Todo'
import TaskList from '../modules/TaskList'
import Navbar from '../modules/Navbar'




const Todoo = () => {
    const [tasks,dispatch]=useReducer(
        taskReducer,
        initalTask,
      )
      const onChangeTask=(task)=>{
        dispatch({type:'changed',task:task})
      }
    
      const onDeleteTask=(taskId)=>{
        dispatch({type:'deleted',taskId:taskId})
      }
      const onAddTask=(value)=>{
        dispatch({type:'added',text:value,id:nextId++})
      }
    return(
     <div>
        <Navbar/>
      <div className='w-100 my-10 mx-auto'>
        <h1 className='text-3xl font-bold mb-2'>TODO App</h1>
     <div className='flex flex-col justify-center '>
          <Todo  onAddTask={onAddTask} />
          <TaskList tasks={tasks} onChangeTask={onChangeTask} onDeleteTask={onDeleteTask}/>
          
        </div>
        
      </div>
     </div>

       
      )}
     
    
    




function taskReducer(tasks,action){
    switch(action.type){
      case 'added':
        return [...tasks,{text:action.text,id:action.id,done: false}]
      case 'changed':
        return tasks.map(task=>task.id===action.task.id?action.task:task)
      case 'deleted':
        return tasks.filter(task=>task.id!==action.taskId)
      default:
        return tasks
    }
  }
  let nextId=1;
  const initalTask=[
    { id: 0, text: 'Philosopher’s Path', done: true },
  ]


export default Todoo
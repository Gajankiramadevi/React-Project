import React,{useState} from "react"
import "./Task/App.css"
import ItemList from "./Task/ItemList"
let App=()=>{
    let [taskInput,setTaskInput]=useState("")
    let [todoList,setTodoList]=useState([])
    let addHandler=()=>{
        todoList.push({description:taskInput})
        setTodoList(todoList)
        setTaskInput("")
    }
    let DeleteTask=(index)=>{
        const newList=todoList.filter((item,i)=>i!==index)
        setTodoList(newList)
    }
    const taskCompleted=(index)=>{
        const list=[...todoList]
        list[index].isComplete=!list[index].isComplete
        
        setTodoList(list)
    }
    return(
        <div className="app-background">
        <h1 className="heading-text">React-ToDo App</h1>
        <div  className="task-container">
            <div > 
                <input className="text-input" value={taskInput} onChange={(e)=>{setTaskInput(e.target.value)}}/>

                <input type="submit" className="add-button" onClick={addHandler}/>
                
                <button className="add-button" onClick={addHandler}>Add</button>
            </div>
            {
            todoList?.length?todoList.map((todoobject,index)=>
            <ItemList index={index} itemData={todoobject} DeleteTask={DeleteTask} taskCompleted={taskCompleted} />):
            <p>no task added</p>
        }
        
        
            
    
            </div>

        
        </div>
    )
}
export default App

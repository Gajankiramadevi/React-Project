import React from "react"
let ItemList=(props)=>{
    return(
        <div className="list-item">
            <span className={props.itemData.isComplete?"task-complete":""}onClick={()=>props.taskCompleted(props.index)}>{props.itemData.description}</span>
            <p className="delete-icon" onClick={()=>props.DeleteTask(props.index)}><i class="fas fa-trash-alt"></i></p>
        
        </div>
    )
}
export default ItemList
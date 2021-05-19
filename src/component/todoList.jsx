import React from 'react'
import TodoItem from'./todoItem'
const TodoList = (props)=>{
    return(
        <div>
            {props.list.map(item => <TodoItem item = {item} onDelete={props.onDelete} onDone={props.onDone}/>)}
        </div>
    )
}

//TodoTitle
//Input Form
//Our TodoList
export default TodoList
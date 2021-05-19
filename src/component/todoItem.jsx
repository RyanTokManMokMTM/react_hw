import { render } from '@testing-library/react'
import React ,{useState  }from 'react'


const TodoItem = (props)=>{
    const [isDone,setIsDone]=useState(props.item)

    const onDone =()=>{
        if(!props.item.isDone){
                setIsDone(oldObj => oldObj.isDone = true)
                props.onDone(props.item)
            }
        }
    

    const onDelete =()=>{
        props.onDelete(props.item)
    }

    return(
        <div>
           <ul style={{display:'flex',listStyle:'none',justifyContent:'flex-start'}}>
           {props.item.isDone === true ?  
           <li style={{paddingRight:250}}><del>{props.item.TODO}</del></li> :   
            <li style={{paddingRight:250}}>{props.item.TODO}</li>}
                <li><button onClick={onDone}>isDone</button></li>
               <li><button onClick={onDelete}>Delete</button></li>
           </ul>
        </div>
    )
}

export default TodoItem
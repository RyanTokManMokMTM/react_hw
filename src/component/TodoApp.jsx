import React,{useState } from 'react'
import TodoTitle from './todoTitle'
import TodoForm from './todoForm'
import TodoList from './todoList'

const TodoApp = (props)=>{
    const [lists,setLists] = useState([])

    const addItem =(item)=>{
        setLists(oldArray => [...oldArray,{"TODO":item,"isDone":false}])
    } 

    const deleteItem = (item) =>{
        setLists(oldArray => oldArray.filter(x=>x.TODO != item.TODO))
    }

    const ItemDone = (item) =>{
        console.log(item)
        var index = lists.findIndex(x => x.TODO === item.TODO)
        var array = lists
        array[index].isDone = true
        setLists(array)
        console.log(lists)

    }

    return(
        <div>
            <TodoTitle />
            <TodoForm onAdd = {addItem}/>
            <TodoList list={lists} onDelete={deleteItem} onDone = {ItemDone}/>
        </div>
    )
}

// class TodoApp extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             lists : []
//         }
//         this.addItem = this.addItem.bind(this)
//     }

//     addItem(item){
//         var newArr = [...this.state.lists, item] 
//         this.setState((prevState)=>{
//             lists : newArr
//         })
//         console.log(this.state.lists)
//     }

//     render(){
//         return(
//         <div>
//             <TodoTitle/>
//             <TodoForm onAdd={this.addItem}/>
       
//         </div>
//         )
//     }
// }
 export default TodoApp
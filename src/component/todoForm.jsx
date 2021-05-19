import React from 'react'


class TodoForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value : ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

     handleChange(event){
       this.setState({
           value: event.target.value
       })
    }

   handleSubmit(event){
        event.preventDefault()
        if(this.state.value != ""){
            this.props.onAdd(this.state.value)
            this.setState({value:''})
        }
    }

    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <input type="submit" value="Add"/>
            </form>
         </div>
        )
    }
}

// const TodoForm = ()=>{
//     const [value,setValue] = useState('')
//     const handleChange = (event)=>{
//         // this.setValue(event.target.value)
//     }

//     const handelSumit = (event)=>{
//         // this.setValue(event.target.value)
//         // event.preventDefault()
        
//     }


//     return (
//         <div>
//             <form onSubmit={this.handelSumit} >
//                 <input type="text" name="NewToDo"/>
//                 <button type="submit" value="submit">Sumbit</button>
//                 <h1>{value}</h1>
//             </form>
//         </div>
//     )
// }

export default TodoForm
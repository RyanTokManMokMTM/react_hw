import React,{useState} from 'react'
import TodoApp from "./TodoApp"
import LoginField from './loginField'
const RouterCondition = ()=>{
    const [isLogin,setLoginState] = useState(false)

    const login =(state)=>{
        setLoginState(true)
    }

    return (
        <div>
            {isLogin ? <TodoApp/> : <LoginField onLogin = {login}/>}
        </div>
    )
}

export default RouterCondition
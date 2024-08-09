import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'


const TodoForm = () => {
    const {addTodo} = useTodo()

    const [todo,setTodo] = useState("")

    //console.log(todo)


    const handleSubmit =(e) => {
        e.preventDefault()
        if(todo !== ""){
          addTodo({id:Date.now(), todo:todo , completed: false})
        }
       

        setTodo("")
    }


  return (

    <>

    <form className='flex' onSubmit={handleSubmit}>

    <input type="text" 
     className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
     value={todo}
     onChange={(e)=>setTodo(e.target.value)}
    />

    <button type="submit" className="hover:bg-purple-800 rounded-r-lg px-3 py-1 bg-purple-400 shrink-0">
        ADD
    </button>

    </form>

    </>


  )
}

export default TodoForm

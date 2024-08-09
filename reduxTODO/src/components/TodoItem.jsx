import React from 'react'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import { editTodo, removeTodo } from '../features/todoSlice'



const TodoItem = () => {

const todos = useSelector(state => state.todos)

const dispatch = useDispatch()



  return (
    <>

   {
    todos.map((todo)=>
    <div key={todo.id}> {todo.text}<button onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button>
    <button onClick={()=>{ dispatch(editTodo())}}>Edit</button>
   
    </div>)
   }

    </>
  )
}

export default TodoItem

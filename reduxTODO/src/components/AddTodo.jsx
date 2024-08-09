import React, { useState } from 'react'
import { addTodo } from '../features/todoSlice'
import {useDispatch} from 'react-redux'




const AddTodo = () => {
const [input, setInput]= useState('')

 const dispatch = useDispatch()
 

 const handleSubmit = (e) => {
    e.preventDefault()
    if(input !== ""){
        dispatch(addTodo(input))
    }
   
    setInput('')
    }


return (
    <>
    <form onSubmit={handleSubmit} >
        <input type="text" 
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e)=>{setInput(e.target.value)}}
         />
        <button type="submit">ADD</button>
    </form>
    </>
  )
}


export default AddTodo

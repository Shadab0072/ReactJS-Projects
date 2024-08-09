import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {todos:[{
    id:1,
    text:"Please Subscribe my channel"
}]}


export const todoSlice = createSlice({
    name : "todo",
    initialState : initialState,
    reducers : {

        addTodo : (state,action)=>{
           const todo = {
            id: nanoid(),
            text: action.payload
           }

           state.todos.push(todo)
        },

        removeTodo : (state,action)=> {
           state.todos = state.todos.filter((item)=>(item.id !== action.payload))
        },

        // editTodo : (state,action)=>{
        //     const { id, text } = action.payload;
        //     const existingTodo = state.todos.find((todo) => todo.id === id);
        //     if (existingTodo) {
        //       const td = existingTodo.text = text;
           
        // }
        // }
    }

})

export const {addTodo,removeTodo,editTodo} = todoSlice.actions

export default todoSlice.reducer
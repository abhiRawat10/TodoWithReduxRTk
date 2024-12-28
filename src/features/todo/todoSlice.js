import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:'hello',completed:false}]
}

export const todoSlice=createSlice({
    name:'todos',
    initialState, //you can write whole initialstate here too 
    reducers:{
        addTodo:(state,action)=>{
            const todo={  //this is one task
                id:nanoid(),
                completed:false,
                text:action.payload     //its payload,taxt but 2 bar likhne ki load nhi h qki same a name or value
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>
            todo.id!==action.payload)  //no need to write id as same as above reason
        },
        updateTodo:(state,action)=>{
            state.todos.map(todo=>
                todo.id==action.id? todo.text=action.payload.text :  todo
            )
        }
    }
})

export const {addTodo,removeTodo,updateTodo}=todoSlice.actions  //***these are action creators created by rtk from the their respective functions we written in reducers
export default todoSlice.reducer  //its a combined reducer function that we can store in reduxStore
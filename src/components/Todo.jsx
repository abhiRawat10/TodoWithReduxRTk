import { useState } from "react";
import { removeTodo,updateTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

function Todo({ todo }) {

    const[editable,setEditable]=useState(false);
    const [input,setInput]=useState(todo.text);

    const dispatch=useDispatch();
    const deleteTodo=(e)=>{
        e.preventDefault()
        dispatch(removeTodo(todo.id));
    }

    const update=(e)=>{
        e.preventDefault();
        dispatch(updateTodo(todo.id,input));
        setEditable(!editable);
    }
    

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input className={editable? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}
                type="text"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                readOnly={!editable}
            />

            <button className="text-black-400" 
            onClick={editable?update:  ()=>setEditable(!editable)}>
                {editable?'save':'edit'}
            </button>


            <button
            className="text-red-600"
            onClick={deleteTodo}
            
            >X</button>
                
            
        </div>
    );
}

export default Todo;

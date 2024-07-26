import { useContext, useState } from "react";
import ModalDialog from "../../layouts/ModalDialog";
import TodoFilter from "./TodoFilter";
import { createPortal } from "react-dom";
import Modal from "../ui/Modal";
import TodoForm from "./TodoForm";
import { TodoContext } from "../../contexts/TodoContext";

const TodoHeader=()=>{

    const [isModalOpen, setIsModalOpen]=useState(false);
    const [isModifyOpen, setIsModifyOpen]=useState(false);
    
    const addTodo=()=>{
        setIsModalOpen(!isModalOpen)
    }

    return (
        <div className="flex items-center justify-between mb-2" id="task-control">
        <button className="px-6 py-2 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer"
                data-cy="add-todo-button" onClick={addTodo}>Add Todo
        </button>
        {isModalOpen && createPortal(<Modal onClose={addTodo}>
            <TodoForm addTodo={addTodo}  >
                New Todo
            </TodoForm>
        </Modal>,document.body)}
        {/* {isModalOpen &&<ModalDialog addTodo={addTodo} clickHandler={clickHandler}/>} */}
        <TodoFilter  />
      </div> 
    );
}


export default TodoHeader

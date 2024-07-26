import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../../contexts/TodoContext";

const TodoBody = () => {

  const {sam:todos} =useContext(TodoContext)
  return (
    <>
        <ul className="px-0 my-8" >
            
            {todos.map(todo=> <TodoItem todo={todo} key={todo.id} />)}
        </ul>
    </>

  )
}

export default TodoBody



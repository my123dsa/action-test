import React, { useContext, useState } from 'react'
import IconButton from '../ui/IconButtonFix.jsx'
import {TODO_CATEGORY_ICON} from '@/contants/icon.js'
import TodoModifyForm from './TodoModifyForm.jsx';
import { createPortal } from 'react-dom';
import Modal from '../ui/Modal.jsx';
import TodoForm from './TodoForm.jsx';
import { TodoContext, TodoDispatchContext } from '../../contexts/TodoContext.jsx';

const TodoItem = ({todo}) => {
    

    const[click,setClick]=useState(false);
    const iconClick=()=>{
      setClick(!click)
    }
    // const {sam:todo}= useContext(TodoContext);
    
    const {deletHandler}=useContext(TodoDispatchContext);
    return (
      <li className="flex gap-4 justify-between my-4 py-4 px-4 border-[1px] bg-gray-700 rounded-md shadow-xl">
          <div>
              <span className="text-lg font-medium text-gray-300"> {TODO_CATEGORY_ICON[todo.category]} </span>
              <div>
                  <h2 data-test="title" className="mb-0 text-lg font-bold text-gray-100 uppercase">{todo.title}</h2>
                  <p className="mt-2 text-base text-gray-200"> {todo.summary}</p>
              </div>
          </div>
          
          <div className="flex items-center gap-1">
            <IconButton icon={"✏️"} click={iconClick}/>
            
             { click && createPortal(
              <Modal  onClose={iconClick}>
                <TodoForm  todo={todo} addTodo={iconClick}>
                  updateTodo
                </TodoForm>
              </Modal>    
              ,document.body) }



            <IconButton textColor ='text-red-300' icon={"🗑️"} click={()=>deletHandler(todo.id)}/>

          </div>
      </li>
    )
  }

  export default TodoItem


// const TodoItem = (props) => {
//     return (
//       <div className='border-4 border-red-400 rounded  mb-2 '>
//           <li>{props.todo}
//               <div>아이콘</div>
//               <div className='flex justify-between'>
//                   <div>제목</div>
//                   <div>
//                       <button className='mr-1'>수정</button>
//                       <button>삭제</button>
//                   </div>
//               </div>
             
//               <div>내용</div>
  
//           </li>
//       </div>
//     )
//   }
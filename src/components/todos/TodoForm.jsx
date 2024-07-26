import React, { useContext, useEffect, useState } from 'react'
import { TODO_CATEGORY_ICON } from '../../contants/icon';
import TodoFilter from './TodoFilter';
import { TodoContext, TodoDispatchContext } from '../../contexts/TodoContext';

const TodoForm = ({addTodo,children,todo}) => {

    // const todo= useContext(TodoContext).sam;
    const [title, setTitle] = useState(todo===undefined ? '': todo.title);
    const [summary, setSummary] = useState(todo===undefined ? '': todo.summary);
    const [category, setCategory] = useState(todo===undefined ? 'TODO': todo.category);
    const [titleError, setTitleError] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const {addHandler,updateHandler}= useContext(TodoDispatchContext);


    const onSubmitHandler=(event)=>{
        event.preventDefault();
        if(todo===undefined){
            const newMakeTodo={   
                title,
                summary,
                category,
            }
            addHandler(newMakeTodo);

        }
        else{
            const newMakeTodo={   
                id: todo.id,
                title: title,
                summary: summary,
                category: category,
            }
            updateHandler(newMakeTodo,false);
        }
        
        addTodo();

    }
    // const onSubmitHandler=(event)=>{
    //     event.preventDefault();
    //     const categoryInput=event.target.selectBox.value;
    //     const titleInput=event.target.title_input.value;
    //     const contentInput=event.target.content_input.value;
        
    //     const newMakeTodo={   
    //         title: titleInput,
    //         summary: contentInput,
    //         category: categoryInput,
    //     }
        
    //     clickHandler(newMakeTodo);
    //     addTodo();
    // }
    useEffect(()=>{
        if(title==='' ||summary===''){
            setTitleError('다 입력해라')
        }
        else{
            setTitleError('')
            setIsButtonDisabled(false)
        }
    })
  return (
    <div>
        <h2>{children}</h2>
        <form onSubmit={onSubmitHandler}>
            <select className="p-2 text-gray-100 bg-gray-800 rounded"
                data-cy="todo-filter"  name="selectBox" value={category}  onChange={(event)=>setCategory(event.target.value)}>
                {/* defaultValue? - https://react.dev/reference/react-dom/components/select */}
                <option value="TODO" >{TODO_CATEGORY_ICON.TODO} To do</option>
                <option value="PROGRESS">{TODO_CATEGORY_ICON.PROGRESS} On progress</option>
                <option value="DONE">{TODO_CATEGORY_ICON.DONE} Done</option>
            </select>
                <div>
                    <label>제목</label>
                    <input type="text" className='border-2' name='title_input' value={title} onChange={(event)=>setTitle(event.target.value)}/>
                </div>
                <div>
                    <label >내용</label>
                    <input type="text" className='border-2' name='content_input' value={summary} onChange={(event)=>setSummary(event.target.value)}/>
                </div>
                <div>
                    {titleError}
                </div>
                <button className='border-2'disabled={isButtonDisabled}>제출</button>
                
                <button type='button' className='border-2' onClick={addTodo}>취소</button>
        </form>
    </div>
  )
}

export default TodoForm
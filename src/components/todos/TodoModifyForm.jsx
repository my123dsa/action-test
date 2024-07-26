import React, { Children, useEffect, useState } from 'react'
import { TODO_CATEGORY_ICON } from '../../contants/icon';

const TodoModifyForm = ({todo,addTodo, clickHandler,children}) => {

    const [title, setTitle] = useState(todo.title);
    const [summary, setSummary] = useState(todo.summary);
    const [category, setCategory] = useState(todo.category);
    const [titleError, setTitleError] = useState('');
    const [summaryError, setSummaryError] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const onSubmitHandler=(event)=>{
        event.preventDefault();
        const newMakeTodo={   
            id: todo.id,
            title: title,
            summary: summary,
            category: category,
        }
        console.log(newMakeTodo);
        clickHandler(newMakeTodo,false);
        addTodo();
        
    }
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
                <div>
                {summaryError}
                </div>
                <button className='border-2'disabled={isButtonDisabled}>제출</button>
                
                <button type='button' className='border-2' onClick={addTodo}>취소</button>
        </form>
    </div>
  )
}

export default TodoModifyForm
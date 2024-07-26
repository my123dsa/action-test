import React from 'react'
import ModalDefault from './ModalDefault';

const ModalDialog = ({ addTodo,clickHandler }) => {
    const onSubmitHandler=(event)=>{
        event.preventDefault();
        const categoryInput=event.target.category_input.value;
        const titleInput=event.target.title_input.value;
        const contentInput=event.target.content_input.value;
        const newMakeTodo={   
            title: titleInput,
            summary: contentInput,
            category: categoryInput,
        }
        
        clickHandler(newMakeTodo);
        addTodo();
    }
    return (
        <ModalDefault onClose={addTodo}>
                <form onSubmit={onSubmitHandler}>
                    <div>
                        <label >제목</label>
                        <input type="text" className='border-2' name='title_input'/>
                    </div>
                    <div>
                        <label >내용</label>
                        <input type="text" className='border-2' name='content_input'/>
                    </div>
                    <div>
                        <label >카테고리</label>
                        <input type="text" className='border-2' name='category_input'/>
                    </div>
                    <button className='border-2'>제출</button>
                </form>
        </ModalDefault>
  )
}

export default ModalDialog





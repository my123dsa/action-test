import { createContext, useEffect, useReducer, useState } from "react"
import TodoBody from "./components/todos/TodoBody"
import TodoHeader from "./components/todos/TodoHeader"
import DefaultLayout from "./layouts/DefaultLayout"
import {TodoContext,TodoDispatchContext} from "./contexts/TodoContext"


const reducer=(todos,action)=>{
  switch(action.type){
    case 'ADD': 
      return [...todos,action.newTodo];
    case 'UPDATE':
      return todos.map(todo =>todo.id === action.newTodo.id ? action.newTodo : todo);
    case 'DELETE':
      return todos.filter(todo=> todo.id !==action.id);
    // case 'UPDATE':

    //   return []
  }
}

const dummyTodos = [
  {
    id: 1,
    title: 'React 공부',
    summary: 'React를 공부한다.',
    category: 'TODO',
  },
  {
    id: 2,
    title: '점심 먹기',
    summary: '점심을 먹는다.',
    category: 'PROGRESS',
  },
  {
    id: 3,
    title: '커피 마시기',
    summary: '커피를 마신다.',
    category: 'DONE',
  }
]

function App() {
  
  const[todos,dispatch]= useReducer(reducer,dummyTodos);

  const [sam, setFilter]=useState(dummyTodos);
  useEffect(() => {
    setFilter(todos);
  }, [todos]); 
  
  // const[todos,setTodos]=useState(dummyTodos);
  const addHandler=(newTodo)=>{
      newTodo['id']=self.crypto.randomUUID();
      // const newTodos=[...todos,newTodo];
      const newItem=dispatch({type:'ADD',newTodo:newTodo})

      setFilter(newItem);
      
      // setTodos(newTodos);
      showFilter('all')
     
  }

  const updateHandler=(newTodo)=>{
        // const updatedTodos = todos.map(todo =>
        //   todo.id === newTodo.id ? newTodo : todo);
          dispatch({type:'UPDATE',newTodo:newTodo})
        // setTodos(updatedTodos);
  }
  const deletHandler= (id)=>{
    // const deleteTodos= todos.filter(todo=> todo.id !==id);
    dispatch({type:'DELETE',id:id})
    // setTodos(deleteTodos) 
  }


  const showFilter=(categoryFilter)=>{
    // all, TODO, PROGRESS, DONE
    if(categoryFilter!=='all'){
      const newL=todos.filter(todo=> todo.category ===categoryFilter);
      setFilter(newL);
    }
    else{
      setFilter(todos);
    }
  }

  return (
    <>
      <DefaultLayout>
        <header>
          <div className="flex justify-center">
            <a to="/">
              <h1 className='py-8 text-red-200 max-w-max animate-bounce-slow text-7xl '>Todos</h1>
            </a>
          </div>
        </header>
        <section className="max-w-xl m-4 mx-auto">
          <TodoContext.Provider value={{sam,showFilter}}>
            <TodoDispatchContext.Provider value={{addHandler,updateHandler,deletHandler}}>
              <TodoHeader />
              <TodoBody  /> {/*updateHandler={updateHandler} deletHandler={deletHandler}*/} 
            </TodoDispatchContext.Provider>
          </TodoContext.Provider>
          
        </section>
      </DefaultLayout>
    </>
  )
}

export default App

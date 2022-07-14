import React, { useState } from 'react';
import TodoForm from './TodoForm';


const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    })
  }
  // if (edit.id) {
  //   return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  // }
  return todos.map((todo, index) => (
    <div>
       {edit.id === todo.id ? <TodoForm edit={edit} onSubmit={submitUpdate} /> : (
         <div className='flex items-center justify-between w-full m-auto'> 
         <div>
           {todo.text}
           </div>
           <div>
          <button
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className='bg-blue-700 p-2 m-1 text-white rounded'>edit
          </button>
          <button
            onClick={() => removeTodo(todo.id)}
            className='bg-red-600 p-2 m-1 text-white rounded'>delete
          </button>
        </div>
         </div>

       )}
    
    </div>))
}

export default Todo;
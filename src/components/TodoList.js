import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos]

    setTodos(newTodos)
    console.log(...todos)
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  }
  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr)
  }

  return (
    <><TodoForm onSubmit={addTodo} />
      <div className='border-gray-600 border-2 border-dashed place-content-center w-1/2 '>
        {todos.length === 0 ?
          <div className='m-1 p-2'>
            <p className='flex place-items-center w-full m-1'>no items yet, please add your first item</p>
          </div> :
          <Todo
            todos={todos}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />

        }

      </div></>
  )
}

export default TodoList;
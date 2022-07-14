import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='flex flex-col place-items-center'>
      <TodoList />
    </div>
  );
}

export default App;
import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
  // const {edit} = props
  const [input, setInput] = useState(props.edit ? props.edit.value : '')

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus();
  })

  const isValidInput = (input.trim() === '');

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {props.edit ? (
        <div className='flex items-center justify-between w-full'>
          <div><input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='border-solid border-2 border-gray-900'
          /></div>
          <div>
            <button onClick={handleSubmit} className='bg-green-700 p-2 m-1 text-white rounded'>
              save
            </button>
            <button onClick={handleChange} className='bg-gray-700 p-2 m-1 text-white rounded'>
              cancel
            </button>
          </div>
        </div>


      ) : (
        <><div>
          <input
            className={isValidInput ? 'appearance-none border-2 border-gray-900 text-gray-900 leading-tight focus:outline-none focus:border-red-500' : 'border-solid border-2 border-gray-900'}
            placeholder='enter a task...'
            value={input}
            onChange={handleChange}
            name='text'

            ref={inputRef}
          />
          <button onClick={handleSubmit} className='bg-orange-400 p-1 m-1 text-white'>
            Add
          </button>
        </div>
        </>
      )}
    </form>
  );
}

export default TodoForm;
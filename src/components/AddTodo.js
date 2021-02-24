import React, { useState } from 'react';

import '../styles/AddTodo.css';

const AddTodo = () => {

  const [todoText, setTodoText] = useState('');

  const handleSubmit = (event) => {
    console.log(todoText);
    event.preventDefault();
    setTodoText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="What do you need to do?"
        value={todoText}
        onChange={(event) => setTodoText(event.target.value)}
      />
      <button type="submit">Create</button>
    </form>
  )
}

export default AddTodo

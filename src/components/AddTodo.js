import React, { useState } from 'react';
import '../styles/AddTodo.css';

import { useSelector, useDispatch } from 'react-redux';

import { addTodo } from '../actions/todos';

const AddTodo = () => {

  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    if(!todoText) return;

    const newTodo = {
      id: todos.length + 1,
      title: todoText
    }

    setTodoText('');
    dispatch(addTodo(newTodo));
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

import React from 'react';
import '../styles/Todos.css';

import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';

const Todos = () => {

  const todos = useSelector(state => state.todos);

  return (
    <div className="todos-container">
      <div className="todos-header">
          <p className="title">In Progress</p>
      </div>
      <div>
        {todos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Todos

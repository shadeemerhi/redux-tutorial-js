import React from 'react';
import '../styles/CompletedTodos.css';

import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';

const CompletedTodos = () => {

  const completedTodos = useSelector(state => state.todos.completedTodos);


  return (
    <div className="completed-todos-container">
      <div className="completed-todos-header">
          <p>Complete</p>
      </div>
      <div>
        {completedTodos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
            />
          )
        })}
      </div>
    </div>
  )
}

export default CompletedTodos;

import React from 'react';
import TodoItem from './TodoItem';
import '../styles/Todos.css';

const Todos = (props) => {
  console.log(props);
  return (
    <div className="todos-container">
      <div className="todos-header">
          <p className="title">In Progress</p>
      </div>
      <div>
        {props.todos.map(todo => {
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

export default Todos

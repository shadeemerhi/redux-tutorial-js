import React from 'react';
import './styles/App.css';

import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import CompletedTodos from './components/CompletedTodos';

const todoList = [
  {
    userId: 1,
    id: 1,
    title: 'Todo Item 1',
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: 'Todo Item 2',
    completed: false
  }
]

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <AddTodo />
        <div className="todo-container">
          <Todos todos={todoList}/>
          <CompletedTodos />
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './styles/App.css';

import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import CompletedTodos from './components/CompletedTodos';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <AddTodo />
        <div className="todo-container">
          <Todos />
          <CompletedTodos />
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './styles/App.css';

import { useSelector } from 'react-redux';

import Header from './components/Header'; 
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';


function App() {

  const counter = useSelector(state => state.counter);

  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <AddTodo />
        <div className="todo-container">
          <Todos />
        </div>
        <div className="counter-container">
          <p>Todos Completed</p>
          <p>{counter}</p>
        </div>
      </div>
    </div>
  );
}

export default App;

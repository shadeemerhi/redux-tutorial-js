import React, { useState, useEffect } from 'react';
import './styles/App.css';

import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import CompletedTodos from './components/CompletedTodos';

import axios from 'axios';


function App() {

  const apiURL = 'https://jsonplaceholder.typicode.com/todos';
  const apiLimit = '?_limit=5';

  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    axios.get(`${apiURL}${apiLimit}`).then(res => {
      setTodos(res.data);
    })
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <AddTodo />
        <div className="todo-container">
          <Todos todos={todos}/>
          <CompletedTodos />
        </div>
      </div>
    </div>
  );
}

export default App;

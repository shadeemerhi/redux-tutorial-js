import React, { useState, useEffect } from 'react';
import './styles/App.css';

import Header from './components/Header'; 
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import CompletedTodos from './components/CompletedTodos';

import axios from 'axios';

const todoData = [
  {
    id: 1,
    title: 'Todo Item 1',
  },
  {
    id: 2,
    title: 'Todo Item 2',
  },
  {
    id: 3,
    title: 'Todo Item 3',
  }
]


function App() {

  const apiURL = 'https://jsonplaceholder.typicode.com/todos';
  const apiLimit = '?_limit=5';

  // const [todos, setTodos] = useState([]);
  // const [completedTodos, setCompletedTodos] = useState([]);

  // useEffect(() => {
  //   axios.get(`${apiURL}${apiLimit}`).then(res => {

  //     res.data.forEach(todo => {
  //       if(!todo.completed) {
  //         setTodos(prev => [...prev, todo]);
  //       } else {
  //         setCompletedTodos(prev => [...prev, todo]);
  //       }
  //     });
  //   })
  // }, []);

  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <AddTodo />
        <div className="todo-container">
          <Todos todos={todoData}/>
          <CompletedTodos />
        </div>
      </div>
    </div>
  );
}

export default App;

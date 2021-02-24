import React from 'react';
import './styles/App.css';

import Header from './components/Header';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <AddTodo />
      </div>
    </div>
  );
}

export default App;

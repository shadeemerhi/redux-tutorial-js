import React from 'react';
import '../styles/TodoItem.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const TodoItem = (props) => {
  return (
    <div className="todo-item">
      <div className="title-container">
        <p>{props.title}</p>
      </div>
      <div className="icon-container">
        <CheckCircleIcon fontSize="large" className="icon check-icon"/>
        <HighlightOffIcon fontSize="large" className="icon delete-icon"/>
      </div>
    </div>
  )
}

export default TodoItem

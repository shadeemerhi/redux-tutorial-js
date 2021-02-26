import React from 'react';
import '../styles/TodoItem.css';

// import { useDipatch } from 'react-redux';

import { 
  completeTodo,
  deleteTodo,
  readdTodo
} from '../actions/todos';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ReplayIcon from '@material-ui/icons/Replay';

const TodoItem = (props) => {

  // const dispatch = useDipatch();

  // const onComplete = () => {
  //   dispatch(completeTodo(props.id));
  // }

  // const onDelete = () => {

  // }

  return (
    <div className="todo-item">
      <div className="title-container">
        <p>{props.title}</p>
      </div>
      <div className="icon-container">
        {props.completed ? 
          (<ReplayIcon fontSize="large" className="icon replay-icon"/>) : 
          (<CheckCircleIcon fontSize="large" className="icon check-icon"/>)
        }
        <HighlightOffIcon fontSize="large" className="icon delete-icon"/>
      </div>
    </div>
  )
}

export default TodoItem;

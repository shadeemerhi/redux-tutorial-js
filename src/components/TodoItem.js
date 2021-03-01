import React from 'react';
import '../styles/TodoItem.css';

import { useDispatch } from 'react-redux';

import { 
  deleteTodo,
  completeTodo
} from '../actions/todos';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ReplayIcon from '@material-ui/icons/Replay';

const TodoItem = React.memo((props) => {

  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteTodo(props.todo));
  }

  const onComplete = () => {
    dispatch(completeTodo(props.todo));
  }

  return (
    <div className="todo-item">
      <div className="title-container">
        <p>{props.todo.title}</p>
      </div>
      <div className="icon-container">
        <CheckCircleIcon 
          className="icon check-icon" 
          fontSize="large"
          onClick={onComplete}
        />
        <HighlightOffIcon 
          className="icon delete-icon"
          fontSize="large"
          onClick={onDelete}
        />
      </div>
    </div>
  )
});

export default TodoItem;

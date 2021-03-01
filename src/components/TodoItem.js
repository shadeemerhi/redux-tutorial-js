import React from 'react';
import '../styles/TodoItem.css';

import { useDispatch } from 'react-redux';

import { 
  deleteTodo,
  toggleTodo
} from '../actions/todos';

import { incrementCounter } from '../actions/counter';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const TodoItem = React.memo((props) => {

  const dispatch = useDispatch();

  // const onDelete = () => {
  //   dispatch(deleteTodo(props.todo));
  // }

  // const onComplete = () => {
  //   dispatch(completeTodo(props.todo));
  //   dispatch(incrementCounter());
  // }

  const onToggleStatus = (markingComplete) => {
    dispatch(toggleTodo(props.todo));
    if(markingComplete) {
      dispatch(incrementCounter());
    }
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
          onClick={() => onToggleStatus(true)}
        />
        <HighlightOffIcon 
          className="icon delete-icon"
          fontSize="large"
          onClick={() => onToggleStatus()}
        />
      </div>
    </div>
  )
});

export default TodoItem;

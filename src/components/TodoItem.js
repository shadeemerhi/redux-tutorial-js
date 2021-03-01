import React from 'react';
import '../styles/TodoItem.css';

import { useDispatch } from 'react-redux';

import { 
  deleteTodo
} from '../actions/todos';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ReplayIcon from '@material-ui/icons/Replay';

const TodoItem = React.memo((props) => {

  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteTodo(props));
  }

  return (
    <div className="todo-item">
      <div className="title-container">
        <p>{props.title}</p>
      </div>
      <div className="icon-container">
        {props.completed ? 
          (<ReplayIcon 
            fontSize="large" 
            className="icon readd-icon"
            // onClick={onToggleCompletionStatus}
          />) : 
          (<CheckCircleIcon 
            className="icon check-icon" 
            fontSize="large"
            // onClick={onToggleCompletionStatus}
          />)
        }
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

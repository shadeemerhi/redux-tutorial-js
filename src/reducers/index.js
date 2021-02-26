import { combineReducers } from 'redux';
import todosReducer from '../reducers/todos';

const allReducers = combineReducers({
  todos: todosReducer
});

export default allReducers;
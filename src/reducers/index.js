import { combineReducers } from 'redux';
import todosReducer from '../reducers/todos';
import counterReducer from '../reducers/counter';

const allReducers = combineReducers({
  todos: todosReducer,
  counter: counterReducer
});

export default allReducers;
import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  READD_TODO
} from '../actions/todos';

const initialState = [];

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return state;
    default:
      return state;
  }
}

export default todosReducer;
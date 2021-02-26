import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  READD_TODO
} from '../actions/todos';

const initialState = [
  {
    id: 1,
    title: 'Todo Item 1'
  }
];

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default todosReducer;
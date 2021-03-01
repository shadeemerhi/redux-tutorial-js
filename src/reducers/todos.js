import {
  ADD_TODO,
  TOGGLE_TODO
} from '../actions/todos';

const initialState = [
  {
    id: 1,
    title: 'Todo Item 1'
  },
]

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return [...state, action.payload]
    // case COMPLETE_TODO:
    //   return state.filter(todo => todo.id !== action.payload.id)
    // case DELETE_TODO:
    //   return state.filter(todo => todo.id !== action.payload.id)
    case TOGGLE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}

export default todosReducer;
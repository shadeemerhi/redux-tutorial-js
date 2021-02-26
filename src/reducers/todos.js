import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  READD_TODO
} from '../actions/todos';

const initialState = {
  inProgressTodos: [
    {
      id: 1,
      title: 'Todo Item 1'
    },
  ],
  completedTodos: [
    {
      id: 2,
      title: 'Todo Item 3',
    }
  ]
}

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case COMPLETE_TODO:
    default:
      return state;
  }
}

export default todosReducer;
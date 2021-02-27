import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO
} from '../actions/todos';

const initialState = {
  inProgressTodos: [
    {
      id: 1,
      title: 'Todo Item 1',
      completed: false
    },
  ],
  completedTodos: [
    {
      id: 2,
      title: 'Todo Item 3',
      completed: true
    }
  ]
}

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        inProgressTodos: [...state.inProgressTodos, action.payload]
      }
    case TOGGLE_TODO:
      if(action.payload.completed) {
        return {
          completedTodos: state.completedTodos.filter(todo => todo.id !== action.payload.id),
          inProgressTodos: [...state.inProgressTodos,
            {
              ...action.payload,
              completed: false
            }
          ]
        }
      } else {
        return {
          inProgressTodos: state.inProgressTodos.filter(todo => todo.id !== action.payload.id),
          completedTodos: [...state.completedTodos, 
            {
              ...action.payload, 
              completed: true
            }
          ]
        }
      }
    case DELETE_TODO: {
      if(action.payload.completed) {
        return {
          ...state,
          completedTodos: state.completedTodos.filter(todo => todo.id !== action.payload.id)
        }
      } else {
        return {
          ...state,
          inProgressTodos: state.inProgressTodos.filter(todo => todo.id !== action.payload.id)
        }
      }
    }
    default:
      return state;
  }
}

export default todosReducer;
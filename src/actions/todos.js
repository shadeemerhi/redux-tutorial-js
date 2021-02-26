// export const SET_TODO_DATA = 'SET_TODO_DATA';
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const READD_TODO = 'READD_TODO';

// export const setTodoData = (todos) => {
//   return {
//     type: SET_TODO_DATA,
//     payload: todos
//   }
// }

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo
  }
}

export const completeTodo = (todo) => {
  return {
    type: COMPLETE_TODO,
    payloay: todo
  }
}

export const deleteTodo = (todo) => {
  return {
    type: DELETE_TODO,
    payload: todo
  }
}

export const readdTodo = (todo) => {
  return {
    type: READD_TODO,
    payload: todo
  }
}
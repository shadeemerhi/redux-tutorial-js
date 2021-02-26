export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const READD_TODO = 'READD_TODO';

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo
  }
}

export const completeTodo = (id) => {
  return {
    type: COMPLETE_TODO,
    payloay: id
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
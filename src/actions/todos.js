const SET_TODO_DATA = 'SET_TODO_DATA';
const ADD_TODO = 'ADD_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';
const DELETE_TODO = 'DELETE_TODO';
const READD_TODO = 'READD_TODO';

export const setTodoData = (todos) => {
  return {
    type: SET_TODO_DATA,
    payload: todos
  }
}

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
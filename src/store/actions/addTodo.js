import {
  ADD_TODO,
  DELETE_TODO
} from '../action-types/index'

export const addTodo = (text) => {
  return {
    type:ADD_TODO,
    text
  }
}

export const deleteTodo = (index) => {
  return {
    type: DELETE_TODO,
    index
  }
}


import {TOGGLE_TODO} from '../action-types/index'

export default function toggleTodo(index) {
  return {
    type:TOGGLE_TODO,
    index
  }
}
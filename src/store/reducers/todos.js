import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO
} from '../action-types/index'

export default (state = [] , action) => {
  switch(action.type){
    case ADD_TODO:
    return [ 
      ...state,
       {
         text : action.text,
         completed : false
       }]
    case TOGGLE_TODO:
       return[
         ...state.slice(0, action.index),
         Object.assign({}, state[action.index], {
           completed: !state[action.index].completed
         }),
         ...state.slice(action.index+1)
       ]
    case DELETE_TODO:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index+1)
      ]
    default:
      return state
  }
}
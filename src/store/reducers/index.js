import {combineReducers} from 'redux'

import todos from './todos'
import fliter from './fliter'

export default combineReducers({
  todos,
  fliter
})
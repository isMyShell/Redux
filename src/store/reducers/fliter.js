import { 
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from '../action-types/index'

// const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// };

export default (state = VisibilityFilters.SHOW_ALL, action) => {
  switch(action.type){
    case SET_VISIBILITY_FILTER:
      return action.fliter
    default :
      return state
  }
} 
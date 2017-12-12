import { SET_VISIBILITY_FILTER } from '../action-types/index'

export default function visibilityFilter(fliter) {
  return {
    type: SET_VISIBILITY_FILTER,
    fliter
  }
}

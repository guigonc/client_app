import { SET_FIELD, ADD_CONTACT } from '../actions/index'

export default (state = {data: {}, added: false}, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {...state, data: {} }
    case SET_FIELD:
      let newState = Object.assign({}, state)
      newState['data'][action.field] = action.value
      return newState
    default:
      return state
  }
}

import { ADD_ACCOUNT, GET_TEAMS, GET_LOCATIONS, GET_GUESTS, GET_NEWUSERS } from './actions'

const DEFAULT_STATE = {
  searchTerm: '',
  fullName: 'poep',
  account: {},
  teams: [],
  locations: []
}
const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_ACCOUNT:
      return {...state, account: action.payload.data}
    case GET_TEAMS:
      return {...state, teams: action.payload.data}
    case GET_LOCATIONS:
     return {...state, locations: action.payload.data}
    case GET_GUESTS:
     return {...state, guests: action.payload.data}
    case GET_NEWUSERS:
     return {...state, newusers: action.payload.data}
    default:
      return state
  }
}

export default rootReducer

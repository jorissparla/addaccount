import axios from 'axios'
export const ADD_ACCOUNT = 'ADD_ACCOUNT'
export const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT'
export const GET_TEAMS = 'GET_TEAMS'
export const GET_GUESTS = 'GET_GUESTS'
export const GET_NEWUSERS = 'GET_NEWUSERS'
export const GET_ALLUSERS = 'GET_ALLUSERS'
export const GET_LOCATIONS = 'GET_LOCATIONS'
const ROOT_URL = 'http://nlbavwtls22:3001/api'

export const createAccount = (props) => {
  const request = axios.put(ROOT_URL + '/accounts', props)
  return {
    type: ADD_ACCOUNT,
    payload: request
  }
}

const fetchTeams = () => {
  console.log('FETCHTEAMS')
  const request = axios.get(ROOT_URL+'/teams')
  return {
    type: GET_TEAMS,
    payload: request
  }
}

const fetchLocations = () => {
  console.log('GET_LOCATIONS')
  const request = axios.get(ROOT_URL+'/locations')
  return {
    type: GET_LOCATIONS,
    payload: request
  }
}

const fetchGuests = () => {
  console.log('GET_GUESTS')
  const request = axios.get(ROOT_URL+'/guests')
  return {
    type: GET_GUESTS,
    payload: request
  }
}

const updateGuest = (props) => {
  const request = axios.post(ROOT_URL+'/guests', props)
   return {
    type: UPDATE_ACCOUNT,
    payload: request
  }
}

const fetchAllUsers = () => {
  console.log('GET_ALLUSERS')
  const request = axios.get(ROOT_URL+'/users')
  return {
    type: GET_ALLUSERS,
    payload: request
  }
}


const fetchNewUsers = () => {
  console.log('GET_NEWUSERS')
  const request = axios.get(ROOT_URL+'/newusers')
  return {
    type: GET_NEWUSERS,
    payload: request
  }
}


exports.fetchNewUsers = fetchNewUsers
exports.fetchAllUsers = fetchAllUsers
exports.fetchTeams = fetchTeams
exports.fetchLocations = fetchLocations
exports.fetchGuests = fetchGuests
exports.updateGuest = updateGuest

import axios from 'axios'
export const ADD_ACCOUNT = 'ADD_ACCOUNT'
export const GET_TEAMS = 'GET_TEAMS'
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

exports.fetchTeams = fetchTeams
exports.fetchLocations = fetchLocations

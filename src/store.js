import { createStore, applyMiddleware, combineReducers } from 'redux'
// import thunk from 'redux-thunk'
import promise from 'redux-promise'
import rootReducer from './reducers'
import { reducer as formReducer } from 'redux-form'

const reducers = {
  // ... your other reducers here ...
  main: rootReducer,
  form: formReducer     // <---- Mounted at 'form'
}

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)
const store = createStoreWithMiddleware(combineReducers(reducers), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store

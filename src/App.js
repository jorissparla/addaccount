import React from 'react'
import { Match, BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import logo from './logo.svg'
import AccountAdd from './AccountAdd'
import AccountWrapper from './AccountWrapper'
import './App.css'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <Provider store={store}>
      <div className="App">
        <p className="App-intro">
         Create new account
        </p>
        <div className="main">
           <Match
              exactly
              pattern='/'
              component={AccountWrapper}
        />
        </div>
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
})

export default App;

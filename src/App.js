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
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
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

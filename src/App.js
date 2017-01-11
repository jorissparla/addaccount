import React from 'react'
import { Match, BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import logo from './logo.svg'
import AccountAdd from './AccountAdd'
import AccountWrapper from './AccountWrapper'
import TestForm from './test/TestForm'
import ExampleForm from './test/ExampleForm'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import './App.css'

const App = React.createClass({
  render () {
    return (
          <MuiThemeProvider muiTheme={getMuiTheme()}>
      <BrowserRouter>
        <Provider store={store}>
      <div className="Ap1p">
        <div className="main1">
           <Match
              exactly
              pattern='/'
              component={() => <AccountWrapper mode='new' />}
        />
        <Match
              exactly
              pattern='/edit'
              component={() => <AccountWrapper mode='edit' />}
        />     
        <Match
              exactly
              pattern='/test'
              component={TestForm}
        />     
        <Match
              exactly
              pattern='/example'
              component={ExampleForm}
        />     
        </div>
          </div>
        </Provider>
      </BrowserRouter>
      </MuiThemeProvider>
    )
  }
})

export default App;

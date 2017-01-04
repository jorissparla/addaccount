import React from 'react'
import { connect } from 'react-redux'
import { fetchTeams, fetchLocations, fetchGuests, fetchNewUsers, updateGuest, fetchAllUsers } from './actions'
import AccountAdd from './AccountAdd'

import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Snackbar from 'material-ui/Snackbar';
import AlertDialog from './AlertDialog'

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
})


const style = {
  margin: '12px' ,
  padding: '20px',
  display: 'flex',
  flexGrow: '0.4',
  justifyContent: 'space-around'

}

const AccountWrapper = React.createClass({
  getInitialState () {
    return {
      open: false,
      err: ''
    }
  },
  componentDidMount () {
    this.props.fetchTeams().then( ()=> {
      let err = 'You are not authorized'
        //this.setState({ open: true, err:err})
    } )
    this.props.fetchLocations()
    this.props.fetchGuests()
    this.props.fetchNewUsers()
    this.props.fetchAllUsers()
    console.log('mode', this.props.mode)
  },
  doSubmit (values) {
    window.alert(`You submitted Parent:\n\n${JSON.stringify(values, null, 2)}`)
    this.props.updateGuest(values).
      then(data=> {
        console.log('success',data)
        let err = (!data.payload.message) ? 'success' : data.payload.message
        this.setState({ open: true, err:err})
    }).
      catch(error=> console.log('error',error))
    console.log('Submit', values)
  },
  
  render () {
    const { teams, locations, guests, newusers, mode, accounts } = this.props
    if (this.state.err) return <AlertDialog message={this.state.err} url='/'/>
    if (!newusers || !teams || !guests || !newusers ) return <div>Loading</div>
    const reduceGuests = guests.map(guest=>guest.login)
    const users = newusers.filter(user=> {
        let res = reduceGuests.indexOf(user.login)
        if (res >=0 ) return true
        else return false }
    )
    if (mode === 'new') {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div className='AccountWrapper'>
      <Paper style={style} zDepth={2} >

        <AccountAdd teams={teams} locations={locations} users={users} onSave={this.doSubmit}/>
      </Paper>
       <Snackbar
          open={this.state.open}
          message={this.state.err}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    </MuiThemeProvider>
    ) } else {
          return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div className='AccountWrapper'>
      <Paper style={style} zDepth={2} >

        <AccountAdd teams={teams} locations={locations} users={accounts} onSave={this.doSubmit}/>
      </Paper>
       <Snackbar
          open={this.state.open}
          message={this.state.err}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    </MuiThemeProvider>
    )

    }
  }
})

const mapStateToProps = (state) => {
  return {
    teams: state.main.teams,
    locations: state.main.locations,
    guests: state.main.guests,
    newusers: state.main.newusers,
    accounts: state.main.accounts
  }
}

export default connect(mapStateToProps, { fetchTeams, fetchLocations, fetchGuests, fetchNewUsers, updateGuest,fetchAllUsers })( AccountWrapper )


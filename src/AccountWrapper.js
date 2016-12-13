import React from 'react'
import { connect } from 'react-redux'
import { fetchTeams, fetchLocations, fetchGuests, fetchNewUsers, updateGuest } from './actions'
import AccountAdd from './AccountAdd'


const reduceTeams = (teams) => {
  return teams.map(team => team.key)
}


const AccountWrapper = React.createClass({
  componentDidMount () {
    this.props.fetchTeams()
    this.props.fetchLocations()
    this.props.fetchGuests()
    this.props.fetchNewUsers()
  },
  doSubmit (values) {
    window.alert(`You submitted Parent:\n\n${JSON.stringify(values, null, 2)}`)
    this.props.updateGuest(values)
    console.log('Submit', values)
  },
  
  render () {
    const { teams, locations, guests, newusers } = this.props
    if (!newusers || !teams || !guests || !newusers ) return <div>Loading</div>
    const reduceGuests = guests.map(guest=>guest.login)
    const users = newusers.filter(user=> {
        let res = reduceGuests.indexOf(user.login)
        if (res >=0 ) return true
        else return false }
    )
    return (
      <div>
        <AccountAdd teams={teams} locations={locations} users={users} onSave={this.doSubmit}/>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    teams: state.main.teams,
    locations: state.main.locations,
    guests: state.main.guests,
    newusers: state.main.newusers
  }
}

export default connect(mapStateToProps, { fetchTeams, fetchLocations, fetchGuests, fetchNewUsers, updateGuest })( AccountWrapper )


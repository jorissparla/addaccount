import React from 'react'
import { connect } from 'react-redux'
import { fetchTeams, fetchLocations, fetchGuests } from './actions'
import AccountAdd from './AccountAdd'


const reduceTeams = (teams) => {
  return teams.map(team => team.key)
}

const AccountWrapper = React.createClass({
  componentDidMount () {
    console.log(this.props)
    this.props.fetchTeams()
    this.props.fetchLocations()
    this.props.fetchGuests()
  },
  
  render () {
    const { teams, locations } = this.props
    console.log(this.props)
    return (
      <div>
        <AccountAdd teams={teams} locations={locations} />
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    teams: state.main.teams,
    locations: state.main.locations,
    guests: state.main.guests
  }
}

export default connect(mapStateToProps, { fetchTeams, fetchLocations, fetchGuests })( AccountWrapper )


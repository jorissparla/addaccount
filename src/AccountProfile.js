import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'

import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Divider from 'material-ui/Divider';
import { AutoComplete as MUIAutoComplete } from 'material-ui'

import {
	TextField,
 //AutoComplete,
	SelectField
} from 'redux-form-material-ui'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


const users = [
	{ login: 'infor\\jsparla', firstName: 'Joris', lastName: 'Sparla', navid: '123456'},
	{ login: 'infor\\gwaede', firstName: 'Graham', lastName: 'Waede', navid: '023456'},
]

//const mappedUsers = users.map(({login, firstName, lastName}) => { return {key: login, description: `${firstName} ${lastName}` }})
const mapUsers =(users) => users.map(({login, firstName, lastName}) => { return {key: login, description: `${firstName} ${lastName}` }})

const regions = [ 'EMEA', 'APJ', 'NA']
//console.log('mappedUsers',mappedUsers)


const buttonStyle = {
	backgroundColor: '#ffc600',
	labelColor: 'white',
	margin: '20px'
}
const buttonStyle2 = {
	backgroundColor: 'black',
	labelColor: 'white',
	margin: '20px'
}

const dataSourceConfig = {
	text: 'description',
	value: 'key',
};

const required = value => value == null ? 'Required' : undefined
const email = value => value &&
	!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email' : undefined

const { func, string } = React.PropTypes

const AutoComplete = ({ input, meta: { touched, error }, dataSourceConfig, ...rest }) => (
	<MUIAutoComplete 
		{...input}
		{...rest}
		dataSourceConfig={dataSourceConfig}
		onNewRequest={value => input.onChange(value[dataSourceConfig.value])} 
		errorText={touched && error} 
	/>
);

let AccountProfileForm = React.createClass({

	propTypes: {
		handleSubmit: func,
		fetchTeams: func,
		fullName: string
	},
	componentDidMount() {
		
	},
	
	render () {
		const { handleSubmit, pristine, reset, submitting, validate, teams, users, locations} = this.props
		const mappedUsers = mapUsers(users)
		console.log('mappedUsers', mappedUsers)
		return (
			<form className='col s12' onSubmit={handleSubmit(this.props.onSave)}>
				<div className='col s4'>
					<Field
						name='login'
						component={AutoComplete}
						openOnFocus={true}
						floatingLabelText="Start typing to find name (Login)"
						dataSource={mappedUsers}
						onClick={(e) => console.log(e, this)}
						filter={AutoComplete.caseInsensitiveFilter}
						dataSourceConfig={dataSourceConfig}
						maxSearchResults={5}
						/>
					<div className="row">
					<div className='col s3'>
						<Field
							name='firstName'
							floatingLabelText="First Name"
							component={TextField}
							type='text'
							ref="firstName" withRef
						/>
						</div>
					<div className='col s4'>
						<Field
							name='lastName'
							floatingLabelText="Last Name"
							component={TextField}
							
							ref="lastName" withRef
						/>
					</div>
					<div className='col s1'>
						<Field
							name='navid'
							floatingLabelText="Navigator Id"
							component={TextField}
							ref="navid" withRef
						/>							
						</div>

					</div>
					<div className='col s4'>
						<Field
							name='fullName'
							floatingLabelText="Full Name"
							component={TextField}
							type='text'
							onClick= { () => { console.log(this.refs)}}
							ref="fullName" withRef
						/>
					</div>
					<div className='col s4'>
						<Field
							name='email'
							floatingLabelText="Email"
							component={TextField}
							type='text'
							/>
					</div>

				</div>
				<div className='col s4'>
				<Field 
					name = 'team'
					component={AutoComplete}
					openOnFocus={true}
					floatingLabelText="Start typing to find Team"
					onNewRequest={value => {
						console.log('AutoComplete ', value) // eslint-disable-line no-console
					}}
					onClick= { (e) => console.log(this,e.target.value)}
					dataSource={teams}
					dataSourceConfig={dataSourceConfig}
					/>
				</div>
				<div className='col s4'>
					<Field 
						name='location' 
						component={AutoComplete}
						openOnFocus={true}
						floatingLabelText="Type Location"
						filter={AutoComplete.caseInsensitiveFilter}
						dataSource={locations}
						dataSourceConfig={dataSourceConfig}
						maxSearchResults={5}
					/>
						<div className='col s4'>
					<Field 
						name='region' 
						component={AutoComplete}
						openOnFocus={true}
						floatingLabelText="region"
						filter={AutoComplete.caseInsensitiveFilter}
						dataSource={regions}
					/>
					</div>
				</div>
				<div className='row'>
				<div className="col s4">
					<RaisedButton primary={true} style={buttonStyle} label='Submit'	type='submit' />
					<RaisedButton	secondary={true} style={buttonStyle2} label='Cancel'	type='submit' />
				</div>
				</div>
			</form>)
	}
})



AccountProfileForm= reduxForm({
	form: 'accountadd',
	enableReinitialize: true,
	keepDirtyOnReinitialize: true
		// a unique identifier for this form
})(AccountProfileForm)

const selector = formValueSelector('accountadd')

AccountProfileForm = connect(
	state => {
		const login = selector(state, 'login')
		const user = state.main.newusers.find(user=> user.login === login)
		//if (!user) return {}

		let { firstName, lastName, navid, region } = user || { firstName: selector(state,'firstName'), lastName: selector(state,'lastName'), navid: selector(state,'navid'), region: 'EMEA'}
		if (!firstName) firstName = '' 
		if (!lastName) lastName = '' 
		return {
			initialValues: {
				firstName,
				lastName,
				navid,
				region: region || 'EMEA',
				fullName: firstName+ ' ' + lastName,
				email: `${firstName}.${lastName}@infor.com`

			}
		}
	}
)(AccountProfileForm)


export default AccountProfileForm




import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'

import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AutoComplete as MUIAutoComplete } from 'material-ui'

import {
  TextField,
 //AutoComplete,
  SelectField
} from 'redux-form-material-ui'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


const users = [
  { login: 'infor\jsparla', firstName: 'Joris', lastName: 'Sparla', navid: '123456'},
  { login: 'infor\gwaede', firstName: 'Graham', lastName: 'Waede', navid: '023456'},
]

const mappedUsers = (users) => {
  users.map(({login, firstName, lastName}) => { return {value: login, text: `${firstName} ${lastName}` }})
}
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
})

const doSubmit = values => {
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
  console.log('Submit', values)
}
const style = {
  margin: 12 ,
  width: '20%' 
}

const buttonStyle = {
  color: deepOrange500
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

let AccountAddForm = React.createClass({

  propTypes: {
    handleSubmit: func,
    fetchTeams: func,
    fullName: string
  },
  componentDidMount() {
    
  },
  
  render () {
    const { handleSubmit, pristine, reset, submitting, validate, teams} = this.props
    return (
       <MuiThemeProvider muiTheme={muiTheme}>
      <Paper style={style} zDepth={2} >
        <form className='col s12' onSubmit={handleSubmit(doSubmit)}>
          <div className='col s4'>
            <Field
              name='login'
              component={TextField}
              floatingLabelText="Login"
              type='text'
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
            <div className='col s1'>
              <Field
                name='navid'
                floatingLabelText="Navigator Id"
                component={TextField}
                type='text'
                ref="navid" withRef
              />              
              </div>
            </div>

            <div className='col s4'>
              <Field
                name='lastName'
                floatingLabelText="Last Name"
                component={TextField}
                type='text'
                
                ref="lastName" withRef
              />
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
            floatingLabelText="Type Teams"
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
              dataSource={this.props.locations}
              dataSourceConfig={dataSourceConfig}
              maxSearchResults={5}
            />
          </div>

          <div className='row'>
            <RaisedButton primary={true} style={buttonStyle} label='Submit' onSubmit={doSubmit} type='submit' />
          </div>
        </form></Paper>
        </MuiThemeProvider>)
  }
})



AccountAddForm= reduxForm({
  form: 'accountadd',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
    // a unique identifier for this form
})(AccountAddForm)

const selector = formValueSelector('accountadd')

AccountAddForm = connect(
  state => {
    const login = selector(state, 'login')
    
    const firstName = selector(state, 'firstName')
    const lastName = selector(state, 'lastName')
    const fullName = selector(state, 'fullName')
  console.log('firstName', firstName, fullName)
    return {
      initialValues: {
      fullName: firstName+ ' ' + lastName,
      email: `${firstName}.${lastName}@infor.com`

      }
    }
  }
)(AccountAddForm)


export default AccountAddForm




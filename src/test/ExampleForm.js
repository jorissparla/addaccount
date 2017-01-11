import React from 'react';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
//import DatePicker from 'material-ui/DatePicker';
import {TextField} from 'redux-form-material-ui'
import { Card, CardSection, Input, MyDatePicker } from '../common'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'


const style = {
  marginLeft: 10,
};
function doSubmit(values) {
    window.alert(`You submitted Parent:\n\n${JSON.stringify(values, null, 2)}`)
}

const DividerExampleForm = (props) => {
   const { handleSubmit} = props 
   return (
      <Card style={{width: '50%'}} >
      <form onSubmit={handleSubmit(doSubmit)}>
      <CardSection>
        <Field
            name='naam'
            label='naam' 
            type='text'
            component={Input}
            onClick={(e) => console.log(e.target.value)}
        />
      </CardSection>
      <Divider />
      <CardSection>
       <Field
            name='adres'
            label='adres' 
            component={Input}
            onClick={(e) => console.log(e.target)}
        />
      </CardSection>  
            <Divider   />
              <CardSection>
          <Field
            name='date'
            label='date'
            component={MyDatePicker}
            />
        </CardSection>  
      <Divider   />
            <CardSection style={styles.buttonSectionStyle}>
             <RaisedButton primary={true} label="Save" backgroundColor='#ffc600'  style={styles.buttonStyle} type='submit'/>
            <RaisedButton secondary={true} label="Cancel" backgroundColor= 'black' style={styles.cancelButtonStyle} />

        </CardSection>


        </form>
      </Card>
)}

const styles = {
  labelStyle: {
    padding: '10px',
    fontSize: 18,
    fontWeight: 'bold'
  },
  inputStyle: {
    marginLeft: '10px',
    fontSize: 18
  },
  buttonSectionStyle: {
    padding: '10px',
    marginLeft: '10px',
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'initial',
    flex: '0.5'
  },
  buttonStyle: {
    margin: 12
  },
  cancelButtonStyle: {
    margin: 12
  }
}


export default reduxForm({ form: 'example'})(DividerExampleForm);
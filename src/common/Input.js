import React, {Component} from 'react'
import  {TextField} from 'redux-form-material-ui'

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, style, ...rest }) => {
  const { containerStyle, inputStyle, labelStyle } = styles
  
  return (
      <TextField 
        hintText={placeholder}
        floatingLabelText={label}
        autoCorrect={false}
        onChangeText={ onChangeText}
        inputStyle={inputStyle }
        value={value}
        name={name}
        underlineShow={false}
        floatingLabelFixed={true}
        floatingLabelStyle={{ fontSize: '18px', marginLeft: '5px'}}
        {...rest}
        />
  )
} 

const styles = {
  inputStyle: {
    color: '#000',
    paddingLeft: '10px',
    fontSize: '18px',
    flex: 1
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 20,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  }
}

export { Input };

import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardSection, Input, Button } from '../common'

class TestForm extends Component {
  render() {
    return (
      <Card style={{width: '50%'}} >
      <CardSection>
        <Input label='naam' />
      </CardSection>
      <Divider />
      <CardSection>
        <Input label='adres' />
      </CardSection>    
      <Divider   />
            <CardSection style={styles.buttonSectionStyle}>
             <RaisedButton label="Save" backgroundColor='lightgreen'  style={styles.buttonStyle}/>
             <RaisedButton label="Cancel" backgroundColor= '#black' style={styles.cancelButtonStyle} />

        </CardSection>
            <CardSection>
              <Button>
                Accept
              </Button>
        </CardSection>
      </Card>
    );
  }
}

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

export default TestForm;
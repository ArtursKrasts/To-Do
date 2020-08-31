import React from 'react';
import '../App.css';
import { Checkbox } from '@material-ui/core';

class ToDoObj extends React.Component{
  
  render(){
    return(
      <p>
        <Checkbox
          color="primary"
          inputProps={{ 'aria-label': 'Checkbox' }}
        />
        {this.props.text}
      </p>
    )
  }
}
export default ToDoObj;
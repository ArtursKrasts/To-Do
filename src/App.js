import React, {useState} from 'react';
import './App.css';
import Text from './components/Text.js'
import ToDoObj from './components/ToDoObj.js'
import ToDoList from './components/ToDoList.js'
import { Button, Checkbox, Input } from '@material-ui/core';

function App() {

  return (
    <div className="App">
      <ToDoList/>
    </div>
  );
}

export default App;

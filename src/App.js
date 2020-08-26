import React, {useState} from 'react';
import './App.css';
import Text from './Text.js'
import { Button } from '@material-ui/core';

function App() {
  const stuff = "Sveiki!";
  const [count, setCount] = useState(0);
  return (
    <div className="App">
        <Text x = {stuff} count = {count} />
        <Button onClick={() => setCount(count + 1)} variant="contained" color="primary">Do</Button>
    </div>
  );
}

export default App;

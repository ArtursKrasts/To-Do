import React from 'react';
import './App.css';

function Text(props) {
    return (
        <div>
            <h1>{props.x}</h1>
            <p>{props.count}</p>
        </div>
    )
}

export default Text;
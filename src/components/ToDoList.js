import React from 'react';
import '../App.css';
import ToDoObj from './ToDoObj.js'
import { Button, Input } from '@material-ui/core';

class ToDoList extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            listOfStuff: [],
            listToDo: [],
            newText: ""
        }

    }

    addText(){
        this.setState({
            listOfStuff: this.state.listOfStuff.concat(this.state.newText)
        },
        () => {
            this.setState({
                listToDo: this.state.listOfStuff.map(ToDo => <ToDoObj text = {ToDo}/>)
            })
        })
    }

    changeText(newText){
        this.setState({
            newText: newText
        })
    }

    render(){
        return(
            <div>
                <h2>To-Do List</h2>
                <p><b>Done</b></p>
                {this.state.listToDo}
                <form className="ToDoList" noValidate autoComplete="off">
                    <Input 
                        id="Input_ToDo"
                        label="MyInput"
                        type="string" 
                        onChange={event => this.changeText(event.target.value)}/>
                </form>
                <Button onClick={() => this.addText()} variant="contained" color="primary">Add</Button>
            </div>
        )
  }
}
export default ToDoList;
import React from 'react';
import '../App.css';
import { Button, Input, Checkbox } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

class ToDoList extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            listCheckedKeys: [],
            listToDo: [],
            newText: ""
        }

    }

    addText(){
        const toDoKey=uuidv4();

        this.setState({
            listToDo: this.state.listToDo.concat(
              <div key={toDoKey}>
                <Checkbox
                  color="primary"
                  inputProps={{ 'aria-label': 'Checkbox' }}
                  onChange={event => this.checked(toDoKey)}
                />
                {this.state.newText}
              </div>)
        })
    }

    changeText(newText){
        this.setState({
            newText: newText
        })
    }

    delete(){
        console.log("ToDoList_delete");
        console.log(this.state.listToDo.concat("before"));
        this.state.listCheckedKeys.map(Key => {
            this.setState(prevState => ({
                listToDo: prevState.listToDo.filter((item) => item.key !== Key)
            }),
                () => {
                    console.log(this.state.listToDo.concat("after_removed"));
                }
            )
        })
    }

    checked(toDoKey){
        console.log("ToDoList_checked:"+{toDoKey});
        var test = true;
        console.log(this.state.listCheckedKeys.concat("before"));
        this.state.listCheckedKeys.map(Key => {
            if(Key === toDoKey){
                this.setState(prevState => ({
                        listCheckedKeys: prevState.listCheckedKeys.filter((item) => item !== toDoKey)
                }),
                    () => {
                        console.log(this.state.listCheckedKeys.concat("after_removed"));
                    }
                )
                test = false;
            }
        })
        if(test){
            this.setState(prevState => ({
                listCheckedKeys: prevState.listCheckedKeys.concat(toDoKey)
            }),
                () => {
                    console.log(this.state.listCheckedKeys.concat("after_added"));
                }
            )
        }  
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
                <p><Button onClick={() => this.addText()} variant="contained" color="primary">Add</Button></p>
                <p><Button onClick={() => this.delete()} variant="contained" color="primary">Delete selected</Button></p>
            </div>
        )
  }
}
export default ToDoList;
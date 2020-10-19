import React, { useState } from "react";
import { Button, Input } from "@material-ui/core";
import ToDo from "./to-do-item.js";
import { v4 as uuidv4 } from "uuid";

const ToDoList = (props) => {
  const [newText, setNewText] = useState("");
  const [listToDo, setListToDo] = useState([]);

  const addText = () => {
    const uuid = uuidv4();
    setListToDo([...listToDo, { uuid, text: newText, checked: false }]);
  };

  const onCheck = (uuid) => {
    const newList = listToDo.map((toDo) => {
      if (toDo.uuid === uuid) {
        toDo.checked = !toDo.checked;
      }
      return toDo;
    });
    setListToDo(newList);
  };

  const deleteDone = () => {
    setListToDo(listToDo.filter((toDo) => toDo.checked !== true));
  };

  return (
    <div>
      <h2>To-Do List</h2>

      <b>Done</b>

      {listToDo.map((toDo) => (
        <ToDo
          key={toDo.uuid}
          uuid={toDo.uuid}
          text={toDo.text}
          checked={toDo.checked}
          onCheck={onCheck}
        />
      ))}
      <form className="ToDoList" noValidate autoComplete="off">
        <Input
          id="Input_ToDo"
          type="string"
          onChange={(event) => setNewText(event.target.value)}
        />
      </form>

      <Button onClick={() => addText()} variant="contained" color="primary">
        Add
      </Button>

      <Button onClick={() => deleteDone()} variant="contained" color="primary">
        Delete selected
      </Button>
    </div>
  );
};

export default ToDoList;

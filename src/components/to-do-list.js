import React, { useState } from "react";
import { Button, Input } from "@material-ui/core";
import ToDo from "./to-do-item.js";
import { v4 as uuidv4 } from "uuid";

const ToDoList = (props) => {
  const [newText, setNewText] = useState("");
  const [listToDo, setListToDo] = useState([]);
  const [listCheckedKeys, setListCheckedKeys] = useState([]);

  const addText = () => {
    const uuid = uuidv4();
    setListToDo([...listToDo, { uuid, text: newText, checked: false }]);
  };

  const onCheck = (toDoKey) => {
    var add = true;
    var list;
    setListCheckedKeys((listCheckedKeys) => (list = listCheckedKeys));
    list.map((Key) => {
      if (Key === toDoKey) {
        setListCheckedKeys((listCheckedKeys) =>
          listCheckedKeys.filter((item) => item !== toDoKey)
        );
        add = false;
      }
    });
    if (add) {
      setListCheckedKeys((listCheckedKeys) => [...listCheckedKeys, toDoKey]);
    }
  };

  const deleteDone = () => {
    listCheckedKeys.map((Key) => {
      setListToDo((listToDo) => listToDo.filter((item) => item.key !== Key));
      setListCheckedKeys((listCheckedKeys) =>
        listCheckedKeys.filter((item) => item !== Key)
      );
    });
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

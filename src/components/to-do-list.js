import React, { useState } from "react";
import { Button, Input } from "@material-ui/core";
import ToDo from "./to-do-item.js";
import { v4 as uuidv4 } from "uuid";

const ToDoList = (props) => {
  const [newText, setNewText] = useState("");
  const [listToDo, setListToDo] = useState([]);
  const [listCheckedKeys, setListCheckedKeys] = useState([]);

  const addText = () => {
    const toDoKey = uuidv4();
    setListToDo([
      ...listToDo,
      <ToDo key={toDoKey} myKey={toDoKey} text={newText} checked={checked} />,
    ]);
  };

  const checked = (toDoKey) => {
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
      <p>
        <b>Done</b>
      </p>
      {listToDo}
      <form className="ToDoList" noValidate autoComplete="off">
        <Input
          id="Input_ToDo"
          type="string"
          onChange={(event) => setNewText(event.target.value)}
        />
      </form>
      <p>
        <Button onClick={() => addText()} variant="contained" color="primary">
          Add
        </Button>
      </p>
      <p>
        <Button
          onClick={() => deleteDone()}
          variant="contained"
          color="primary"
        >
          Delete selected
        </Button>
      </p>
    </div>
  );
};

export default ToDoList;

import React, { useState, useEffect } from "react";
import { Button, Input, Checkbox } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

function ToDoList(props) {
  const [newText, setNewText] = useState("");
  const [listToDo, setListToDo] = useState([]);
  const [listCheckedKeys, setListCheckedKeys] = useState([]);

  useEffect(() => {
    console.log(listToDo.concat("after"));
  }, [listToDo]);

  useEffect(() => {
    console.log(listCheckedKeys.concat("after"));
  }, [listCheckedKeys]);

  function addText() {
    const toDoKey = uuidv4();

    setListToDo([
      ...listToDo,
      <div key={toDoKey}>
        <Checkbox
          color="primary"
          inputProps={{ "aria-label": "Checkbox" }}
          onChange={(event) => checked(toDoKey)}
        />
        {newText}
      </div>,
    ]);
  }

  function checked(toDoKey) {
    var add = true;
    var list;
    console.log("ToDoList_checked:".concat(toDoKey));
    setListCheckedKeys((listCheckedKeys) => (list = listCheckedKeys));
    console.log(list.concat("before"));
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
  }

  function deleteDone() {
    console.log("ToDoList_delete");
    console.log(listToDo.concat("before"));
    listCheckedKeys.map((Key) => {
      setListToDo((listToDo) => listToDo.filter((item) => item.key !== Key));
      setListCheckedKeys((listCheckedKeys) =>
        listCheckedKeys.filter((item) => item !== Key)
      );
    });
  }

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
}

export default ToDoList;

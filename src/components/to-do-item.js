import React from "react";
import { Checkbox } from "@material-ui/core";

const ToDo = (props) => {
  return (
    <div>
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "Checkbox" }}
        value={props.checked}
        onChange={() => props.onCheck(props.uuid)}
      />
      {props.text}
    </div>
  );
};

export default ToDo;

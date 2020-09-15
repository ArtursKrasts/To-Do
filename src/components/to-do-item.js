import React from "react";
import { Checkbox } from "@material-ui/core";

const ToDo = (props) => {
  return (
    <div>
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "Checkbox" }}
        onChange={() => props.checked(props.myKey)}
      />
      {props.text}
    </div>
  );
};

export default ToDo;

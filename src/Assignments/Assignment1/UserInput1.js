import React from "react";

const userInputAssignment1 = (props) => {
  const borderStyle = {
    border: "3px solid rgb(73, 100, 84)",
  };
  return (
    <input
      type="text"
      onChange={props.changed}
      value={props.username}
      style={borderStyle}
    />
  );
};

export default userInputAssignment1;

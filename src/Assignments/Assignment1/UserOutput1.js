import React from "react";
import UserInput from "./UserInput1";
import "./AssignmentOne.css";

const userOutputAssignment1 = (props) => {
  return (
    <div className="AssignementOne">
      <p>Type in to change username</p>
      <UserInput changed={props.changed} username={props.username} />
      <p>Username: {props.username}</p>
    </div>
  );
};

export default userOutputAssignment1;

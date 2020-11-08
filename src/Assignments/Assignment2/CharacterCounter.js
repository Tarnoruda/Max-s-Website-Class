import React from "react";
import ValidationComponent from "./ValidationComponent";
import CharComponents from "./CharComponents";

const characterCounter = (props) => {
  return (
    <div>
      <input type="text" value={props.value} onChange={props.change} />
      <p>count: {props.count}</p>
      <ValidationComponent count={props.count} />
      <CharComponents value={props.value} click={props.click} />
    </div>
  );
};

export default characterCounter;

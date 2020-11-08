import React from "react";

const charComponents = (props) => {
  const letters = props.value.split("");
  const length = letters.length;
  return (
    <div>
      {length > 0 ? <p>Click on boxes to remove the letters</p> : null}
      {letters.map((letter, index) => {
        return (
          <p className="AssignmentTwo" onClick={props.click(index)}>
            {letter}
          </p>
        );
      })}
    </div>
  );
};

export default charComponents;

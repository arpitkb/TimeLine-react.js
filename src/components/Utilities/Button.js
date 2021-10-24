import React from "react";

function Button(props) {
  return (
    <>
      <input
        type="radio"
        className="btn-check"
        id={props.id}
        value={props.value}
        name="group"
        onClick={props.onsetHandler}
      />
      <label className="btn btn-outline-primary" htmlFor={props.id}>
        Radio {props.value}
      </label>
    </>
  );
}

export default Button;

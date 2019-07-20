import React from "react";
import "./Input.scss";

export default function TextInput(props) {
  const className = props => {
    if (props.validInputs === false && props.value === "") {
      return "TextInput invalid";
    } else {
      return "TextInput";
    }
  };
  const errorMessage = (
    <p
      className={
        props.validInputs === false && props.value === ""
          ? "error-message"
          : "hidden"
      }
    >
      Please enter an input!
    </p>
  );

  return (
    <article className={className(props)} style={{ width: `${props.width}` }}>
      <label htmlFor={`${props.name}`}>{props.label}</label>
      <input
        type="text"
        name={`${props.name}`}
        value={`${props.value}`}
        autoComplete={`${props.autoComplete}`}
        onChange={props.handleChange}
      />
      {errorMessage}
    </article>
  );
}

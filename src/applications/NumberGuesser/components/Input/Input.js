import React from "react";
import "./Input.scss";

export default function TextInput(props) {
  return (
    <article className="TextInput" style={{ width: `${props.width}` }}>
      <label htmlFor={`${props.name}`}>{props.label}</label>
      <input
        type="text"
        name={`${props.name}`}
        value={`${props.value}`}
        autoComplete={`${props.autoComplete}`}
        onChange={props.handleChange}
      />
    </article>
  );
}

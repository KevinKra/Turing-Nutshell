import React from "react";
import "./Button.scss";

export default function button(props) {
  return (
    <button
      className="btn"
      onClick={e => props.handleClick(e)}
      style={{
        backgroundColor: `${props.backgroundColor}`,
        border: `${props.border}`,
        borderRadius: `${props.borderRadius}`,
        color: `${props.textColor}`,
        minWidth: `${props.width}`,
        height: `${props.height}`
      }}
    >
      {props.text}
    </button>
  );
}

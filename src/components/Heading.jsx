import React from "react";
import "../styles/Heading.css";
function Heading(props) {
  return (
    <div className="Heading">
      <div className="number">{props.number}</div>
      <div className="title">{props.title}</div>
    </div>
  );
}

export default Heading;

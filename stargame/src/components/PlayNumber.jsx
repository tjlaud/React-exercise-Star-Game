import React from "react";

function PlayNumber(props) {
  // Color Theme
  const colors = {
    available: "rgb(111, 124, 103)",
    used: "rgb(76, 93, 66)",
    wrong: "rgb(168, 73, 44)",
    candidate: "rgb(112, 170, 143)",
  };

  return (
    <button
      className="number"
      style={{ backgroundColor: colors[props.status] }}
      onClick={() => props.onClick(props.number, props.status)}
    >
      {props.number}
    </button>
  );
}

export default PlayNumber;

import React from "react";
import "../App.css";
import utils from "../math-utils";

function StarDisplay(props) {
  return (
    <>
      {utils.range(1, props.count).map((starId) => (
        <div key={starId} className="star" />
      ))}
    </>
  );
}

export default StarDisplay;

{
  /* <>
{utils.range(1, props.count).map(starId => (
  <div key={starId} className="star" />
))}
</> */
}

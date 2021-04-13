import React from "react";
import "../App.css";

function PlayAgain(props) {
  return (
    <div className="game-done">
      <div
        className="message"
        style={{
          color:
            props.gameStatus === "lost"
              ? "rgb(194, 23, 0)"
              : "rgb(136, 226, 84)",
        }}
      >
        {props.gameStatus === "lost" ? "Game Over" : "Nice"}
      </div>
      <button className="playAgainButton" onClick={props.onClick}>
        Play Again
      </button>
    </div>
  );
}

export default PlayAgain;

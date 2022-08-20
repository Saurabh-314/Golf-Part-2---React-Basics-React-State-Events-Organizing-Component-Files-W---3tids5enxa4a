import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  const start = () => {
    setRenderBall(true)
  };
  const reset = () => {
    setRenderBall(false);
    setY(0);
    setX(0);
    
  };
  const renderChoice = (e) => {
    if (e.key === "ArrowUp") {
      setY(y - 5);
    }
    else if (e.key === "ArrowDown") {
      setY(y + 5);
    }
    else if (e.key === "ArrowLeft") {
      setX(x - 5);
    }
    else if (e.key === "ArrowRight") {
      setX(x + 5);
    }
  }

  return (
    <div onKeyDown={renderChoice} className="playground">
      <button
        onClick={start}
        className={renderBall ? "ball" : "start"}
        style={{ left: `${x}px`, top: `${y}px` }}>
        Start
      </button>
      <button onClick={reset} className="reset">
        Reset
      </button>
      {/* {renderBall && renderChoice()} */}
    </div>
  );
};

export default App;

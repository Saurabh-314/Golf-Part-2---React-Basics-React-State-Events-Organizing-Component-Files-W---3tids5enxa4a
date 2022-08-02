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
    setRenderBall(false)
  };
  const renderChoice = () => {
    // console.log("i am render choice");
    document.addEventListener('keydown', (e) => {
      if (e.key === "ArrowUp"){
        // console.log("Up")
        setY(y-5);
      } 
      if (e.key === "ArrowDown"){
        // console.log("Down")
        setY(y+5);
      } 
      if (e.key === "ArrowLeft"){
        // console.log("left")
        setX(x-5);
      }
      if (e.key === "ArrowRight"){
        // console.log("right")
        setX(x+5);
      }
    })

  };

  return (
    <div className="playground">
      <button 
      onClick={start} 
      className={renderBall ? "ball" : "start"} 
      style={{ left: `${x}px`, top: `${y}px` }}>
        Start
      </button>
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderBall && renderChoice()}
    </div>
  );
};

export default App;

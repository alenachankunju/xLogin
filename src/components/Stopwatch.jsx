import React, { useState, useEffect, useRef } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0); // Time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // Format time as M:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Handle start/stop
  const toggleRunning = () => {
    setIsRunning(!isRunning);
  };

  // Handle reset
  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };

  // Effect to handle the timer
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  return (
    <div
      style={{
        maxWidth: "300px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        textAlign: "center",
      }}
    >
      <h2>Stopwatch</h2>
      <div
        style={{
          fontSize: "36px",
          margin: "20px 0",
          fontFamily: "monospace",
        }}
      >
        Time: {formatTime(time)}
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button
          onClick={toggleRunning}
          style={{
            padding: "10px 20px",
            backgroundColor: isRunning ? "#dc3545" : "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          onClick={reset}
          style={{
            padding: "10px 20px",
            backgroundColor: "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;

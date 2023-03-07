import React, { useState } from 'react';
import "./Stopwatch.css"


function Stopwatch() {
  const [counter, setCounter] = useState(0)
  const [intervalId, setIntervalId] = useState()

  function handleStart() {
    if (!intervalId) {
      const id = setInterval(() => {
        setCounter(counter => counter + 1)
      }, 1000)
      setIntervalId(id)
    }
  }
  function handleReturn() {
    clearInterval(intervalId)
    setIntervalId(undefined)
    setCounter(0)
  }
  function handlePause() {
    clearInterval(intervalId)
    setIntervalId(undefined)
  }
  return (
    <div className="stopwatch">
      <h1>{counter}</h1>
      <div className="controls">
        <button onClick={handleReturn}>Reset</button>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
      </div>
    </div>
  );
}

export default Stopwatch

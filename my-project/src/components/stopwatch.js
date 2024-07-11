import React, { useState, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef();

  const startStopwatch = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
      setIsRunning(true);
    }
  };

  const pauseStopwatch = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const milliseconds = (`0${time % 1000}`).slice(-3);
    const seconds = (`0${Math.floor((time / 1000) % 60)}`).slice(-2);
    const minutes = (`0${Math.floor((time / (1000 * 60)) % 60)}`).slice(-2);
    return `${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border rounded-lg shadow-md">
      <div className="text-3xl font-semibold text-center mb-4">Stopwatch</div>
      <div className="text-6xl font-semibold text-center mb-4">{formatTime(time)}</div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={isRunning ? pauseStopwatch : startStopwatch}
          className={`px-6 py-2 text-lg rounded-md ${isRunning ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={resetStopwatch}
          className="px-6 py-2 text-lg rounded-md bg-gray-300 text-gray-700"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;

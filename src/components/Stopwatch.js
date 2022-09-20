import { useEffect, useState } from "react";

export const Stopwatch = () => {
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 1000);
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [running]);

  const makeReadable = (t) => {
    const timeInSec = t / 1000;
    const hours = Math.floor(timeInSec / 3600);
    const min = Math.floor((timeInSec - hours * 3600) / 60);
    const sec = timeInSec - hours * 3600 - min * 60;

    return `${checkTwoDigits(hours)}:${checkTwoDigits(min)}:${checkTwoDigits(
      sec
    )}`;
  };

  const checkTwoDigits = (t) => {
    if (t < 10) {
      return "0" + t;
    }
    return t;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>{makeReadable(timer)}</h2>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={() => setTimer(0)}>Reset</button>
    </div>
  );
};

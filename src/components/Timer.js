import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Timer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const hoursRef = useRef();
  const minRef = useRef();
  const secRef = useRef();

  // Add method
  yup.addMethod(yup.number, "stripEmptyField", function () {
    return this.transform((value) => (value === "" ? undefined : value));
  });

  const schema = yup.object().shape({
    hour: yup
      .number("Must be a number")
      .typeError("Enter a number between 0 and 59")
      .max(59, "Enter a number between 0 and 59")
      .min(0, "Enter a number between 0 and 59"),
    minute: yup
      .number()
      .typeError("Enter a number between 0 and 59")
      .max(59, "Enter a number between 0 and 59")
      .min(0, "Enter a number between 0 and 59"),
    second: yup
      .number()
      .typeError("Enter a number between 0 and 59")
      .max(59, "Enter a number between 0 and 59")
      .min(0, "Enter a number between 0 and 59"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (!running) {
    }
    return () => {
      clearInterval(interval);
    };
  }, [running]);

  useEffect(() => {
    if (time === 0) {
      setRunning(false);
      setTime(0);
    }
  }, [time]);

  const getTimer = (e) => {
    let hours;
    let min;
    let sec;

    hours = parseInt(e.hour);
    min = parseInt(e.minute);
    sec = parseInt(e.second);

    /// const regex = /^[0-9]{1,2}$/;

    let fullTime = hours * 3600 + min * 60 + sec;

    setTime(fullTime);
  };

  const makeReadable = (t) => {
    const hours = Math.floor(t / 3600);
    const min = Math.floor((t - hours * 3600) / 60);
    const sec = t - hours * 3600 - min * 60;

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
      <h1>Timer</h1>
      <h1>{makeReadable(time)}</h1>
      <form onSubmit={handleSubmit(getTimer)} className="">
        <input
          type="number"
          placeholder="hours"
          defaultValue="0"
          ref={hoursRef}
          {...register("hour")}
          onChange={(e) => {
            setIsDisable(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="minutes"
          defaultValue="0"
          ref={minRef}
          {...register("minute")}
          onChange={(e) => {
            setIsDisable(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="sec"
          defaultValue="0"
          ref={secRef}
          {...register("second")}
          onChange={(e) => {
            setIsDisable(e.target.value);
          }}
        />

        <p style={{ color: "red" }}> {errors.minute?.message}</p>
        <p style={{ color: "red" }}> {errors.hour?.message}</p>
        <p style={{ color: "red" }}> {errors.second?.message}</p>

        <button onClick={() => setRunning(!running)} disabled={!isDisable}>
          {running ? "Stop" : "Start"}
        </button>
      </form>
    </div>
  );
};

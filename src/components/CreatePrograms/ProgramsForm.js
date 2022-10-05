import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../Btn/Button";

export const ProgramsForm = (props) => {
  const { setIsDisplayed } = props.isDisplayed;
  const { id, setId } = props.idProgram;
  const { program, setProgram } = props.program;
  const [count, setCount] = useState(0);
  const [inputFields, setInputFields] = useState([
    {
      taskName: "",
      taskDescription: "",
    },
  ]);

  //const [newProgram, setNewProgram] = useState({});

  const schema = yup.object().shape({
    programName: yup.string().required(),

    taskName: yup.string().required(),
    taskDescription: yup.string(),
    taskTimer: yup.number(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data, e) => {
    e.preventDefault();
    console.log(data);
    /* if (id === null) {
      setProgram([
        ...program,
        {
          programName: data.programName,
          taskName: data.taskName,
          taskDescription: data.taskDescription,
          taskTimer: data.taskTimer,
        },
      ]);
    } else {
      const newProgramLine = [...program];
      newProgramLine[id] = {
        programName: data.programName,
        taskName: data.taskName,
        taskDescription: data.taskDescription,
        taskTimer: data.taskTimer,
      };

      setProgram(newProgramLine);
      setId(null);
    } */
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        programName: "",
        taskName: "",
        taskDescription: "",
        taskTimer: "",
      });
      setIsDisplayed(false);
    }
  }, [formState, reset, setIsDisplayed]);

  useEffect(() => {
    if (id !== null) {
      reset({
        programName: program[id].programName,
        taskName: program[id].taskName,
        taskDescription: program[id].taskDescription,
        taskTimer: program[id].taskTimer,
      });
    }
  }, [id, program, reset, setIsDisplayed]);

  return (
    <div>
      <Button onClick={() => setCount((prev) => prev + 1)} float={true}>
        Add Task
      </Button>
      <form onSubmit={handleSubmit(handleForm)}>
        <input
          type="text"
          placeholder="Programs Name..."
          {...register("programName")}
          className="border border-slate-500"
        />
        <input
          type="text"
          placeholder="Set a Timer..."
          {...register("taskTimer")}
          className="border border-slate-500"
        />
        <input
          type="text"
          placeholder="Task Name..."
          {...register("taskName")}
          className="border border-slate-500"
        />
        <textarea
          placeholder="Task Description"
          {...register("taskDescription")}
          className="border border-slate-500"
        />
        {Array.from(Array(count)).map((input, i) => {
          return (
            <Fragment>
              <input
                type="text"
                placeholder="Task Name..."
                className="border border-slate-500"
              />
              <textarea
                placeholder="Task Description"
                className="border border-slate-500"
              />
            </Fragment>
          );
        })}
        <p style={{ color: "red" }}> {errors.programName?.message}</p>
        <p style={{ color: "red" }}> {errors.taskName?.message}</p>
        <p style={{ color: "red" }}> {errors.taskDescription?.message}</p>
        <p style={{ color: "red" }}> {errors.taskTimer?.message}</p>

        <input type="submit" value="Create Program" />
      </form>
    </div>
  );
};

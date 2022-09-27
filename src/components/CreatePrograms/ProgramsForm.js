import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const ProgramsForm = (props) => {
  const { setIsDisplayed } = props.isDisplayed;
  const { program, setProgram } = props.program;

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

    /* setNewProgram({
      programName: data.programName,
      taskName: data.taskName,
      taskDescription: data.taskDescription,
      taskTimer: data.taskTimer,
    }); */
    setProgram([
      ...program,
      {
        programName: data.programName,
        taskName: data.taskName,
        taskDescription: data.taskDescription,
        taskTimer: data.taskTimer,
      },
    ]);
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

  return (
    <div>
      <form onSubmit={handleSubmit(handleForm)}>
        <input
          type="text"
          placeholder="Programs Name..."
          {...register("programName")}
        />

        <input
          type="text"
          placeholder="Task Name..."
          {...register("taskName")}
        />
        <textarea
          placeholder="Task Description"
          {...register("taskDescription")}
        />
        <input
          type="text"
          placeholder="Set a Timer..."
          {...register("taskTimer")}
        />
        <p style={{ color: "red" }}> {errors.programName?.message}</p>
        <p style={{ color: "red" }}> {errors.taskName?.message}</p>
        <p style={{ color: "red" }}> {errors.taskDescription?.message}</p>
        <p style={{ color: "red" }}> {errors.taskTimer?.message}</p>

        <input type="submit" value="Create Program" />
      </form>
      <p>ici {program.programName}</p>
      {program.map((line, i) => (
        <p key={i}>là {line.programName}</p>
      ))}
    </div>
  );
};
